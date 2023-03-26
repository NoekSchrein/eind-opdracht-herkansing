import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Login({toggleLogin, isLoggedIn}) {
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState({});

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];


    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                toggleLogin(true);
                navigate("/mijn-account");
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" className="button-1"/>
                </div>
            </form>
        </div>
    );

    return (
        <div>
            <h2>Login</h2>
            <div className="app">
                <div className="login-form">
                    {isLoggedIn ? <div>User is successfully logged in</div> : renderForm}
                </div>
                <div className="subscribe">
                    <h3>Nog geen account?</h3>
                    <button type="button"
                            className="button-2"
                            onClick={() => navigate("/account-aanmaken")}
                    >Account aanmaken</button>
                </div>
            </div>
        </div>
    );
}

export default Login;