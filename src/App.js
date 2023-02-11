import './App.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
          <Nav/>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
          </Routes>
      </>
  );
}

export default App;
