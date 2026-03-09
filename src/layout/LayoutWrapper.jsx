import { ScrollProvider } from "../providers/ScrollProvider"
import { ToastProvider } from "../providers/ToastProvider"

export const LayoutWrapper = ({children}) =>{
    return(
        <ToastProvider>
            <ScrollProvider>
                {children}
            </ScrollProvider>
        </ToastProvider>
    )
}