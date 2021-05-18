import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Nav() {
  return (
    <div className="menu">
      <Link to="/pokemons" className="link">
        Home
      </Link>
      <Link to="/pokemon/create" className="link">
        Create Pokemon
      </Link>
      <Link to="/pokemon/search" className="link">
        Search Pokemon
      </Link>
    </div>
  );
}

export default Nav;
