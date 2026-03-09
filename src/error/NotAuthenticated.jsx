import { Link, useNavigate } from "react-router-dom"
import { routes } from "../routes/Routes"
import { useAuth } from "../providers/AuthProvider";
import { BsUnlock } from "react-icons/bs";
import { LuLockKeyhole } from "react-icons/lu";

export const NotAuthenticated = () =>{
    const { user, authenticated, signOut } = useAuth();

    const navigate = useNavigate();
    
    const useDifferentAccount = () =>{
        signOut();
        navigate(routes.public().signin());
    }

    return(
        <div className="w-100 vh-100 d-flex align-items-center justify-content-center px-3 py-5">
            <div className="card border rounded-4">
                <div className="card-body text-center p-3 p-sm-5">
                    {authenticated ? (
                        <>
                            <BsUnlock className="display-5 mb-3" />
                            <h4>You are currently signed in.</h4>
                            <p className="text-muted">What action would you like to take?</p>
                            <div className="d-flex flex-column gap-2">
                                <button
                                    onClick={useDifferentAccount}
                                    className="btn btn-sm btn-outline-secondary"
                                >Sign in with a different account</button>
                                <Link to={routes.auth().concat().home()} className="btn btn-sm btn-outline-primary">
                                    Continue as {user.attributes.fullName}
                                </Link>
                            </div>
                        </>
                    ):(
                        <>
                            <LuLockKeyhole className="display-5 mb-3" />
                            <h4>You are not authenticated.</h4>
                            <p className="text-muted">Please sign in to continue</p>
                            <Link to={routes.public().signin()} className="btn btn-sm btn-outline-primary rounded-pill px-4">
                                Sign In
                            </Link>
                        </>
                    )}
                    
                </div>
            </div>
        </div>
    )
}