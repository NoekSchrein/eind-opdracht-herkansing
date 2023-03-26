import React, {createContext, useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");

        if (storedToken) {
            const decoded = jwt_decode(storedToken);
            if (Math.floor(Date.now() / 1000) < decoded.exp) {
                console.log("The user is still logged in.")
                void fetchUserData(decoded.sub, storedToken);
            } else {
                console.log("The token has expired")
                localStorage.removeItem('token')
            }
        } else {
            setIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            })
        }
    }, []);

    function login(token) {
        localStorage.setItem("token", token);
        const decoded = jwt_decode(token);
        void fetchUserData( token, "/mijn-account")
    }

    async function fetchUserData(token ,redirectUrl) {
        try {
            const result = await axios.get("https://frontend-educational-backend.herokuapp.com/api/user", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            setIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.email,
                    email: result.data.email
                },
                status: "done"
            });
            if (redirectUrl){
                navigate(redirectUrl)
            }
        } catch (e) {
            console.error(e);
            setIsAuth({
                ...isAuth,
                status: 'done',
            });
        }
    }

    function logout() {
        localStorage.removeItem('token');
        setIsAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        navigate('/');
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        status: isAuth.status,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === "done" ? children : <span>Loading...</span>}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;