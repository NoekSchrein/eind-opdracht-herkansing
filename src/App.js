import React, { useContext } from 'react';
import { AuthContext } from "./context/AuthContext";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import MocktailRecipe from "./pages/MocktailRecipe/MocktailRecipe";
import MocktailOverview from "./pages/MocktailOverview/MocktailOverview";
import Login from "./pages/Login/Login";
import AccountPage from "./pages/AccountPage/AccountPage";
import Register from "./pages/Register/Register";
import AddRecipe from "./pages/AddRecipe/AddRecipe";


function App() {
    const { isAuth } = useContext(AuthContext);

  return (
      <>
          <nav className="outer-container nav-outer-container">
              <Nav/>
          </nav>
          <header className="outer-container">
              <Header/>
          </header>
          <main className="outer-container">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/mocktails" element={<MocktailOverview/>}/>
                  <Route path="/mocktails/:id" element={<MocktailRecipe/>}/>
                  <Route path="/login" element={<Login />} />
                  <Route path="/mijn-account" element={isAuth ? <AccountPage/> :  <Login />}/>
                  <Route path="/registreren" element={<Register/>}/>
                  <Route path="/recept-toevoegen" element={<AddRecipe/>}/>
              </Routes>
          </main>
          <footer className="outer-container footer-outer-container">
              <Footer/>
          </footer>
      </>
  );
}

export default App;
