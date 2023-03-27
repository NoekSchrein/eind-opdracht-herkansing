import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        toggleLoading(true);

        try {
            toggleError(false)

            const result = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {
                email,
                username,
                password,
            })
            if (result.status === 200 ) {
                navigate("/login");
            }
        } catch (e) {
            console.error(e);
            toggleError(true)
        }
        toggleLoading(false);
    }

    return (
        <div className="inner-container">
            {loading && <span>
                Loading...
            </span>}
            <h1 className="h1-vervolg">registreren</h1>
            <p>Vul onderstaande gegevens in om een account aan te maken</p>
            <p className="login-link">Al een account? <Link to="/login">Klik hier</Link> om in te loggen</p>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-fields">
                    <label htmlFor="email-field">
                        Emailadres:
                        <input
                            type="email"
                            id="email-field"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label htmlFor="username-field">
                        Gebruikersnaam:
                        <input
                            type="text"
                            id="username-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>

                    <label htmlFor="password-field">
                        Wachtwoord:
                        <input
                            type="password"
                            id="password-field"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
                <button
                    type="submit"
                    className="button-1"
                    disabled={loading}
                >
                    Registreren
                </button>
            </form>
        </div>
    );
}

export default Register;