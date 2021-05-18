const axios = require("axios");
const { Type } = require("../db");

// Funciones
function getTypes(req, res) {
  Type.findAll().then((r) => {
    res.send(r);
  });
}

function apiTypes() {
  axios
    .get("https://pokeapi.co/api/v2/type")
    .then((r) => {
      return r.data.results;
    })
    .then((apiTypes) => {
      let idT = 1;
      for (type of apiTypes) {
        let addType = { ...type, id: idT++ };
        Type.create(addType);
      }
    })
    .catch((err) => console.error(err));
}

module.exports = {
  getTypes,
  apiTypes,
};
