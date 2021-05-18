import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

// Components
import LandingPage from "./Components/LandingPage/LandingPage";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Specs from "./Components/Specs/Specs";
import CreatePokemon from "./Components/CreatePokemon/CreatePokemon";
import Search from "./Components/Search/Search";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/pokemons" component={Home} />
      <Route exact path="/pokemons/:id" component={Specs} />
      <Route exact path="/pokemon/create" component={CreatePokemon} />
      <Route exact path="/pokemon/search" component={Search} />
    </div>
  );
}

export default App;
