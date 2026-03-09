import { createContext, useContext, useEffect, useState } from "react"

const Context = createContext();

export const useAuth = () => useContext(Context);

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState();
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const signIn = async() =>{
        setUser({
            id: new Date().getTime(),
            attributes: {
                firstName: 'John',
                lastName: 'Do',
                fullName: 'John Do',
                role: 'Health Professional'
            }
        });
        setAuthenticated(true);
    }

    const signOut = async() =>{
        setUser(null);
        setAuthenticated(false);
    }
    
    const values = {
        user,
        authenticated,
        loading,
        signIn,
        signOut
    }

    useEffect(()=>{
        setLoading(false);
    }, []);

    return(
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}
