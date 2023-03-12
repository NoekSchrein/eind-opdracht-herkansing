import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import MocktailRecipe from "./pages/MocktailRecipe/MocktailRecipe";
import MocktailOverview from "./pages/MocktailOverview/MocktailOverview";
import Login from "./pages/Login/Login";
import {useState} from "react";
import AccountPage from "./pages/AccountPage/AccountPage";

function App() {
    const [isLoggedIn, toggleLogin] = useState(false)

  return (
      <>
          <nav className="outer-container nav-outer-container">
              <Nav loggedIn={isLoggedIn} toggleLogin={toggleLogin}/>
          </nav>
          <header className="outer-container">
              <Header/>
          </header>
          <main className="outer-container">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/mocktails" element={<MocktailOverview/>}/>
                  <Route path="/mocktails/:idDrink" element={<MocktailRecipe/>}/>
                  <Route path="/login" element={<Login toggleLogin={toggleLogin} isLoggedin={isLoggedIn}/>} />
                  <Route path="/mijn-account" element={isLoggedIn ? <AccountPage/> :  <Navigate to="/login" />}/>
                  <Route path="/account-aanmaken" />
              </Routes>
          </main>
          <footer className="outer-container footer-outer-container">
              <Footer/>
          </footer>
      </>
  );
}

export default App;
