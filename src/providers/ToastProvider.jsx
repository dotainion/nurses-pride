import { createContext, useContext, useState } from "react"
import { motion } from "framer-motion";

const Context = createContext();

export const useToast = () => useContext(Context);

export const ToastProvider = ({children}) =>{
    const [liveTime, setLiveTime] = useState(10000);
    const [toasts, setToasts] = useState([]);

    const append = (msg, color) =>{
        if(toasts.find((prev)=>prev.message === msg)){
            return toasts.forEach((toast)=>toast.message === msg && toast.init());
        }

        class Init{
            set(msg, theme){
                this.id = new Date().getTime();
                this.message = msg;
                this.theme = theme;
            }

            init(){
                clearTimeout(this.timeoutRef);
                this.timeoutRef = setTimeout(() => {
                    remove(this.id);
                }, liveTime);
                return this;
            }
        }

        const toast = new Init();
        toast.set(msg, color);
        toast.init();
        setToasts((prevs)=>[toast, ...prevs]);
    }

    const remove = (id) =>{
        setToasts((prevs)=>prevs.filter((prev)=>prev.id !== id));
    }

    const values = {
        toast: {
            message: (msg)=>append(msg, 'dark'),
            warning: (msg)=>append(msg, 'warning'),
            success: (msg)=>append(msg, 'success'),
            error: (msg)=>append(msg, 'error'),
        },
        setLiveTime
    }

    return(
        <Context.Provider value={values}>
            {children}
            {toasts.length > 0 && (
                <div className="position-fixed bottom-0 end-0 overflow-auto p-3 ps-0" style={{zIndex: 1056, maxHeight: '100vh'}}>
                    {toasts.map((toast, i)=>(
                        <motion.div
                            className="toast show shadow-sm mb-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            key={toast.message}
                        >
                            <div className="d-flex toast-body text-danger py-3">
                                <div className="me-auto">{toast.message}</div>
                                <button onClick={()=>remove(toast.id)} className="btn-close" type="button" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </Context.Provider>
    )
}