import './App.css';
import {Route, Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <>
          <Nav/>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/mocktails"/>
              <Route path="/mocktails/:id"/>
          </Routes>
          <Footer/>
      </>
  );
}

export default App;
