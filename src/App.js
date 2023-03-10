import './App.css';
import {Route, Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import MocktailRecipe from "./pages/MocktailRecipe/MocktailRecipe";
import MocktailOverview from "./pages/MocktailOverview/MocktailOverview";
import Login from "./pages/Login/Login";
import Kopie from "./pages/MocktailOverview/Kopie"

function App() {
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
                  <Route path="/mocktails" element={<Kopie/>}/>
                  <Route path="/mocktails/:idDrink" element={<MocktailRecipe/>}/>
                  <Route path="/login" element={<Login/>}/>
              </Routes>
          </main>
          <footer className="outer-container footer-outer-container">
              <Footer/>
          </footer>
      </>
  );
}

export default App;
