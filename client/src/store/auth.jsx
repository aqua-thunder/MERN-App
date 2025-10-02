import { createContext, useContext, useState, useEffect } from "react";
import React from "react";
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [services, setServices] = useState([])
    const AuthorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem('token', serverToken);
    }

    let isLoggedIn = !!token;
    // Tackling the logout functionality
    const LogoutUser = () => {
        setToken("")
        return localStorage.removeItem("token");
    }

    // JWT Authentication - to get the currently loggedin user data 
    const userAuthentication = async () => {
        try {
            setIsLoading(true)
            const response = await fetch("http://localhost:8000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: AuthorizationToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
                setIsLoading(false)
            }else{
                setIsLoading(false)
            }
        } catch (error) {
            console.error("Error Fetching using data")
        }
    }
    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/data/service", {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                setServices(data.message)
            }
        } catch (error) {
            console.log(`services frontend error ${error}`)
        }
    }
    useEffect(() => {
        getServices();
        userAuthentication();

    }, []);


    return (<AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, AuthorizationToken, isLoading }}>
        {children}
    </AuthContext.Provider>);
};

export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext)
    if (!AuthContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return AuthContextValue;
}
