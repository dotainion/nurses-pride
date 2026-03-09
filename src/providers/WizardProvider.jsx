import { createContext, useContext, useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "./ToastProvider";

const Context = createContext();

export const useWizard = () => useContext(Context);

export const WizardProvider = ({children}) =>{
    const { toast } = useToast();

    const navigate = useNavigate();
    const location = useLocation();

    const wizardState = useRef({});
    const validityCallbackRef = useRef();

    const validatePath = (path) =>{
        try{
            if(!wizardState.current[path]){
                throw new Error('All task must be complted first.');
            }
            navigate(path);
        }catch(error){
            toast.error(error.message);
        }
    }
   
    const values = {
        jumpTo: (path) => validatePath(path),
        toPrev: (path) => validatePath(path),
        toNext: (path) => {
            try{
                wizardState.current[location.pathname] = {
                    state: validityCallbackRef.current(),
                    prev: location.pathname,
                    next: path
                };
                navigate(path);
            }catch(error){
                toast.error(error.message);
            }
        },
        setValidityCallback: (callback) => {
            validityCallbackRef.current = callback;
        }
    }

    return(
        <Context.Provider value={values}>
            <div className="row justify-content-center p-0 m-0 mt-4">
                <div className="col-12 col-md-8 col-xl-5">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
}

export const useWizardValidity = (callback, dependencies) =>{
    const { setValidityCallback } = useContext(Context);

    useEffect(()=>{
        setValidityCallback(()=>callback());
    }, [...dependencies]);
    return null;
}
