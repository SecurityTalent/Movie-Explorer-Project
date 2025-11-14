import { NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import MovieDetail from "./Pages/MovieDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
