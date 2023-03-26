import React, {useState, useContext} from 'react';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import "./Login.css";

function Login() {
    const { login, isAuth } = useContext(AuthContext)
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate();

    async function handleLogin() {
        toggleLoading(true);

        try {
            toggleError(false)

            const result = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signin", {
                username: username,
                password: password,
            })
            console.log(result.data)
            login(result.data.accessToken);
        } catch (e) {
            console.error(e);
            toggleError(true)
            setErrorMessage("Gebruikersnaam en wachtwoord komen niet overeen");
        }
        toggleLoading(false);
    }

    const renderForm = (
        <div className="form">
            <form onSubmit={handleLogin}>
                <div className="input-container">
                    <label>Gebruikersnaam: </label>
                    <input
                        type="text"
                        name="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label>Wachtwoord: </label>
                    <input
                        type="password"
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <span className="error">
                {errorMessage}
            </span>}
                <div className="button-container">
                    <input type="submit" className="button-1"/>
                </div>
            </form>
        </div>
    );

    return (
        <div>{loading && <span>
                Loading...
            </span>}
            <h1 className="h1-vervolg">Login</h1>
            <div className="app">
                <div className="login-form">
                    {isAuth ? <div>User is successfully logged in</div> : renderForm}
                </div>
                <div className="subscribe">
                    <h3>Nog geen account?</h3>
                    <button type="button"
                            className="button-2"
                            onClick={() => navigate("/registreren")}
                    >Account aanmaken</button>
                </div>
            </div>
        </div>
    );
}
export default Login;