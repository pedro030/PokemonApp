/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes } from "../../actions/index";
import "./styles.css";

function LandingPage() {
  const dispatch = useDispatch();
  const pokemonsLoaded = useSelector((store) => store.pokemonsLoaded);
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, []);
  return (
    <div className="container">
      <h1 className="title">Welcome to Pokemon app</h1>
      <div className="loading">
        {pokemonsLoaded ? (
          <Link to="/pokemons">
            <button className="btn">GO</button>
          </Link>
        ) : (
          <p>LOADING...</p>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
