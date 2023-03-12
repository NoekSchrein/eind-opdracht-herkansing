import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import {NavLink, useNavigate} from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo-drink.png";
import Button from "../Button/Button";

function Nav({loggedIn, toggleLogin}) {
    const navigate = useNavigate();

    function signOut() {
        toggleLogin(false);
        navigate('/')
    }

    return (
        <div className="inner-nav-container">
            <nav className="navigation">
                <div className="nav-name-attribute">
                    <h1 className="nav-header"
                        onClick={() => navigate("/")}>Mocktails</h1>
                    <img src={logo} alt="drink logo" className="logo"/>
                </div>
                <ul className="nav-list">
                    <li><NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/mocktails">
                        Recepten</NavLink>
                    </li>
                    {loggedIn === true
                        ? <>
                            <li><NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to="/mijn-account">
                                Profiel
                            </NavLink></li>
                            <li>
                                <button
                                    className="button-2"
                                    onClick={signOut}>
                                    Uitloggen
                                </button>
                            </li>
                        </>
                        : <li><NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/login">
                            Login
                        </NavLink></li>}
                {<SearchBar/>}
            </ul>
        </nav>
    </div>);
}

export default Nav;