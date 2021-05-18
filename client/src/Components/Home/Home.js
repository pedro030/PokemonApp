import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

// components
import Filters from "../Filters/Filters";
import Cards from "../Cards/Cards";

// export function Home(props){
export default function Home() {
  const pokemonsShowed = useSelector((store) => store.pokemonsShowed);

  return (
    <div className="home">
      <Filters />
      <Cards className="card" show={pokemonsShowed} />
    </div>
  );
}
