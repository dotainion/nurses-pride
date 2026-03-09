import { createContext, useContext, useState } from "react"

const Context = createContext();

export const useScroll = () => useContext(Context);

export const ScrollProvider = ({children}) =>{
    const defaultCssClasses = 'vh-100 d-flex flex-column overflow-y-auto overflow-x-hidden';

    const [dynamicClassName, setDynamicClassName] = useState(defaultCssClasses);

    const scroll = (e) =>{
        //console.log(e)
    }

    const values = {
        setScrollableClassName: setDynamicClassName,
        useDefaultClassName: () => setDynamicClassName(defaultCssClasses),
    }

    return(
        <Context.Provider value={values}>
            <div onScroll={scroll} className={dynamicClassName}>
                {children}
            </div>
        </Context.Provider>
    )
}
