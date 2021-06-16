const axios = require('axios');
const {v4: uuidv4} = require('uuid');
const {POKEMON_URL} = require('../../constants');
const {Pokemon, Type} = require('../db');
let pokemonApi = {};

function getPokemonsById(req, res) {
	const searchID = req.params.id;
	axios
		.get(`${POKEMON_URL}/${searchID}`)
		.then((r) => {
			let pokemon = {
				id: r.data.id,
				name: r.data.forms[0].name,
				img: r.data.sprites.other.dream_world.front_default,
				height: r.data.height,
				weight: r.data.weight,
				hp: r.data.stats[0].base_stat,
				attack: r.data.stats[1].base_stat,
				defense: r.data.stats[2].base_stat,
				speed: r.data.stats[5].base_stat,
				types: r.data.types.map((type) => type.type.name),
			};
			res.send(pokemon);
		})
		.catch((err) => {
			Pokemon.findOne({
				where: {
					id: searchID,
				},
			})
				.then((r) => {
					res.send(r);
				})
				.catch((err) => {
					res.status(200).send({error: 'pokemon not found'});
				});
		})
		.catch((err) => {
			res.status(400).send({error: err});
		});
}

function getPokemonsByName(req, res) {
	const searchName = req.query.name;
	axios
		.get(`${POKEMON_URL}/${searchName}`)
		.then((r) => {
			let pokemon = {
				id: r.data.id,
				name: r.data.forms[0].name,
				img: r.data.sprites.other.dream_world.front_default,
				height: r.data.height,
				weight: r.data.weight,
				hp: r.data.stats[0].base_stat,
				attack: r.data.stats[1].base_stat,
				defense: r.data.stats[2].base_stat,
				speed: r.data.stats[5].base_stat,
				types: r.data.types.map((type) => type.type.name),
			};
			res.send(pokemon);
		})
		.catch((err) => {
			Pokemon.findOne({
				where: {
					name: searchName,
				},
			}).then((r) => {
				if (r) {
					return res.send(r);
				}
				return res.status(200).send({error: 'pokemon not found'});
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

async function createPokemon(req, res) {
	const {name, hp, attack, defense, speed, height, weight, types} = req.body;
	try {
		if (name) {
			let poke = await Pokemon.create({
				id: uuidv4(),
				name,
				hp,
				attack,
				defense,
				speed,
				height,
				weight,
			});
			await poke.addTypes(types);
			let type = await poke.getTypes({attributes: ['name', 'id']});
			type = type.map((t) => t.name);
			poke = {...poke.dataValues, types: type};
			res.send(poke);
		}
	} catch (err) {
		console.log(err);
	}
}

async function asyncgetPokemon() {
	try {
		const Pokemons = await axios.get(`${POKEMON_URL}`);
		const PokemonsNext = await axios.get(`${Pokemons.data.next}`);
		let pokemonsData = [];
		for (obj of Pokemons.data.results) {
			let dataObj = await axios.get(`${obj.url}`);
			pokemonsData.push({
				id: dataObj.data.id,
				name: dataObj.data.forms[0].name,
				img: dataObj.data.sprites.other.dream_world.front_default,
				attack: dataObj.data.stats[1].base_stat,
				types: dataObj.data.types.map((type) => type.type.name),
			});
		}
		for (obj of PokemonsNext.data.results) {
			let dataObj = await axios.get(`${obj.url}`);
			pokemonsData.push({
				id: dataObj.data.id,
				name: dataObj.data.forms[0].name,
				img: dataObj.data.sprites.other.dream_world.front_default,
				attack: dataObj.data.stats[1].base_stat,
				types: dataObj.data.types.map((type) => type.type.name),
			});
		}
		return pokemonsData;
	} catch (error) {
		console.log(error);
	}
}

async function getPokemons(req, res) {
	try {
		if (!pokemonApi.api && !pokemonApi.db) {
			let db = await Pokemon.findAll({include: [Type]});
			db = db.map((p) => {
				let types = p.types.map((t) => t.name);
				return {...p.dataValues, types};
			});
			let api = await asyncgetPokemon();
			pokemonApi = {api, db};
		}
		res.status(200).send(pokemonApi);
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	getPokemonsById,
	getPokemonsByName,
	createPokemon,
	asyncgetPokemon,
	getPokemonsByName,
	getPokemons,
};
