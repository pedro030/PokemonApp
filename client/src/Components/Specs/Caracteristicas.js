import React from "react";

import "./styles.css";

export default function Caracteristicas(props) {
  const {
    error,
    img,
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    id,
  } = props.pokemon;
  return (
    <div className="home">
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="specs">
          <img src={`${img}`} alt="pokemon img" />
          <div className="stats">
            <h2>{name}</h2>
            <p>
              <span>Vida: </span>
              {hp}
            </p>
            <p>
              <span>Attack: </span>
              {attack}
            </p>
            <p>
              <span>Defense: </span>
              {defense}
            </p>
            <p>
              <span>Speed: </span>
              {speed}
            </p>
            <p>
              <span>Height: </span>
              {height}
            </p>
            <p>
              <span>Weight: </span>
              {weight}
            </p>
            <p>
              <span>ID: </span>
              {id}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
