//Importing modules
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing components
import NavBar from './components/NavBar'

//Importing pages
import Home from './pages/Home';
import Colour from './pages/Colour';
import NotFound from "./pages/NotFound";
import ChosenPokemon from "./pages/ChosenPokemon";

export default function App() {

    return (
      <BrowserRouter>
        <div className = "App">
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pick-a-colour" element={<Colour />} />
              <Route path="/card-images" element={<ChosenPokemon />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
      </BrowserRouter>
    );
}