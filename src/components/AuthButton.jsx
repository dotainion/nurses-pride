import { Link } from "react-router-dom"
import { useAuth } from "../providers/AuthProvider"
import { routes } from "../routes/Routes";

export const AuthButton = ({className, to, children}) =>{
    const { authenticated } = useAuth();
    const path = to && authenticated ? to : routes.public().signin();
    return(
        <Link to={path} className={className}>
            {children}
        </Link>
    )
}