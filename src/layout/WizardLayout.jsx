import { Outlet } from "react-router-dom"
import { WizardNavigator } from "../components/WizardNavigator"
import { LayoutWrapper } from "./LayoutWrapper"
import { WizardProvider } from "../providers/WizardProvider"

export const WizardLayout = () =>{
    return(
        <LayoutWrapper>
            <WizardProvider>
                <WizardNavigator>
                    <Outlet />
                </WizardNavigator>
            </WizardProvider>
        </LayoutWrapper>
    )
}