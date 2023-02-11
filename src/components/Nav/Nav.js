import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import {NavLink, useNavigate} from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo-drink.png";

function Nav() {
    const navigate = useNavigate();

    return (<div className="outer-container nav-outer-container">
        <nav className="inner-container nav-inner-container">
            <div className="nav-name-attribute">
                <h1 className="nav-header"
                    onClick={() => navigate("/")}>Mocktails</h1>
                <img src={logo} alt="drink logo" className="logo"/>
            </div>
            <ul className="nav-list">
                <li><NavLink
                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/">
                    Recepten</NavLink></li>
                <li><NavLink
                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/">
                    Login</NavLink></li>
                {<SearchBar/>}
            </ul>
        </nav>
    </div>);
}

export default Nav;