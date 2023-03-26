import React, { useContext } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import {NavLink, useNavigate} from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo-drink.png";
import {AuthContext} from "../../context/AuthContext";

function Nav() {
    const navigate = useNavigate();

    const { isAuth, logout } = useContext(AuthContext);


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
                        className="menu-link"
                        to="/mocktails">
                        Recepten</NavLink>
                    </li>
                    { isAuth === true
                        ? <>
                            <li><NavLink
                                className="menu-link"
                                to="/mijn-account">
                                Profiel
                            </NavLink></li>
                            <li>
                                <button
                                    className="button-2"
                                    onClick={logout}>
                                    Uitloggen
                                </button>
                            </li>
                        </>
                        : <li><NavLink
                            className="menu-link"
                            to="/login">
                            Login
                        </NavLink></li>}
                {<SearchBar/>}
            </ul>
        </nav>
    </div>);
}

export default Nav;