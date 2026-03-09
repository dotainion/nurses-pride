import { Navigate, Outlet } from "react-router-dom"
import { LayoutWrapper } from "./LayoutWrapper"
import { Header } from "../components/Header"
import { useAuth } from "../providers/AuthProvider"
import { routes } from "../routes/Routes"
import { Spinner } from "../components/Spinner"

export const AuthLayout = () =>{
    const { authenticated, loading } = useAuth();

    if(loading) return(
        <Spinner show />
    )
    if(authenticated) return(
        <LayoutWrapper>
            <Header />
            <Outlet />
        </LayoutWrapper>
    )
    return <Navigate to={routes.error().authenticated()} />
}