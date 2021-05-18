import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, clearPokemonSpecs } from "../../actions/index";
import Caracteristicas from "./Caracteristicas";

export default function Specs(props) {
  const dispatch = useDispatch();
  const pokemonSpecs = useSelector((store) => store.pokemonSpecs);

  useEffect(() => {
    dispatch(getPokemonById(props.match.params.id));
    return () => {
      dispatch(clearPokemonSpecs());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Caracteristicas pokemon={pokemonSpecs} />;
}
