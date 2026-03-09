import { useLayoutEffect } from "react";
import { useAuth } from "../../providers/AuthProvider"
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/Routes";
import { Spinner } from "../../components/Spinner";

export const SignOut = () =>{
    const { signOut } = useAuth();

    const navigate = useNavigate(true);

    useLayoutEffect(()=>{
        signOut().finally(()=>{
            navigate(routes.public().home())
        });
    }, []);

    return <Spinner show />
}