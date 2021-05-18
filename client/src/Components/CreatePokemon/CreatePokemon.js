import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon } from "../../actions/index";
import "./styles.css";

export function validate(input) {
  let errors = {};
  for (let key in input) {
    if (key !== "name") {
      if (!input[key]) {
        errors[key] = "is required";
      } else if (isNaN(input[key])) {
        errors[key] = "must be a number";
      }
    } else {
      if (!input[key]) {
        errors[key] = "name is required";
      } else if (/\d/.test(input[key])) {
        errors[key] = "only letters";
      }
    }
  }
  return errors;
}

export default function CreatePokemon() {
  const [error, setError] = useState({});
  const [inputs, setInputs] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });
  const [types, setTypes] = useState([]);
  const typesDB = useSelector((store) => store.types);
  const dispatch = useDispatch();

  function handleChecked(e) {
    if (e.target.checked) {
      setTypes([...types, e.target.id]);
      console.log(types);
    } else {
      console.log("ya esta");
      let pos = types.indexOf(e.target.id);
      types.splice(pos, 1);
    }
  }
  function handleInputChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    let error = validate(inputs);
    if (!Object.keys(error).length && types.length) {
      alert("Pokekemon created");
      dispatch(addPokemon({ ...inputs, types: types.map((n) => parseInt(n)) }));
      setInputs({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
      });
      setTypes([]);
      e.target.reset();
    } else {
      alert("complete the form");
    }
  }

  return (
    <div className="home">
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="stat">
            <label>Name: </label>
            <input
              name="name"
              type="text"
              value={inputs.name}
              placeholder="name"
              onChange={handleInputChange}
            />
            {error.name && <span>{error.name}</span>}
          </div>
          <div className="stat">
            <label>Hp: </label>
            <input
              name="hp"
              type="text"
              value={inputs.hp}
              placeholder="hp"
              onChange={handleInputChange}
            />
            {error.hp && <span>{error.hp}</span>}
          </div>

          <div className="stat">
            <label>Attack: </label>
            <input
              name="attack"
              type="text"
              value={inputs.attack}
              placeholder="attack"
              onChange={handleInputChange}
            />
            {error.attack && <span>{error.attack}</span>}
          </div>

          <div className="stat">
            <label>Defense: </label>
            <input
              name="defense"
              type="text"
              value={inputs.defense}
              placeholder="defense"
              onChange={handleInputChange}
            />
            {error.defense && <span>{error.defense}</span>}
          </div>

          <div className="stat">
            <label>Speed: </label>
            <input
              name="speed"
              type="text"
              value={inputs.speed}
              placeholder="speed"
              onChange={handleInputChange}
            />
            {error.speed && <span>{error.speed}</span>}
          </div>

          <div className="stat">
            <label>height: </label>
            <input
              name="height"
              type="text"
              value={inputs.height}
              placeholder="height"
              onChange={handleInputChange}
            />
            {error.height && <span>{error.height}</span>}
          </div>

          <div className="stat">
            <label>Weight: </label>
            <input
              name="weight"
              type="text"
              value={inputs.weight}
              placeholder="weight"
              onChange={handleInputChange}
            />
            {error.weight && <span>{error.weight}</span>}
          </div>
          <h2>Types</h2>
          <div className="input-types">
            {typesDB &&
              typesDB.map((t) => (
                <div key={`${t.id}`} className="type">
                  <input
                    key={`${t.id}`}
                    type="checkbox"
                    name={`tipos`}
                    value={`${t.name}`}
                    id={`${t.id}`}
                    onChange={handleChecked}
                  />
                  <label htmlFor={`${t.name}`}>{`${t.name}`}</label>
                </div>
              ))}
          </div>
          <input className="create-btn" type="submit" value="create" />
        </form>
      </div>
    </div>
  );
}
