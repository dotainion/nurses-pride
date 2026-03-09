import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { LayoutWrapper } from "./LayoutWrapper"

export const PublicLayout = () =>{
    return(
        <LayoutWrapper>
            <Header />
            <Outlet />
            <Footer />
        </LayoutWrapper>
    )
}