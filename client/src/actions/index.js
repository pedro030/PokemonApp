import axios from 'axios';

// constantes
import {
	GET_POKEMONES,
	GET_POKEMON_ID,
	FILTER_TYPE_POKEMON,
	FILTER_ORIGIN_POKEMON,
	SORT_POKEMONS,
	GET_POKEMON_NAME,
	GET_TYPES,
	ADD_POKEMON,
	CLEAR_POKEMON_SPECS,
	CLEAR_POKEMON_SEARCH,
} from '../constants';
const {REACT_APP_BACKEND_URL} = process.env;

export function addPokemon(specs) {
	return (dispatch) => {
		axios.post(`${REACT_APP_BACKEND_URL}/pokemon`, specs).then((r) => {
			dispatch({type: ADD_POKEMON, payload: r.data});
		});
	};
}

export function getTypes() {
	return (dispatch) => {
		return axios.get(`${REACT_APP_BACKEND_URL}/type`).then((r) => {
			dispatch({type: GET_TYPES, payload: r.data});
		});
	};
}

export function getPokemons() {
	return (dispatch) => {
		return axios.get(`${REACT_APP_BACKEND_URL}/pokemon`).then((r) => {
			dispatch({type: GET_POKEMONES, payload: r.data});
		});
	};
}

export function getPokemonName(name) {
	return (dispatch) => {
		return axios
			.get(`${REACT_APP_BACKEND_URL}/pokemon/?name=${name}`)
			.then((r) => {
				dispatch({type: GET_POKEMON_NAME, payload: r.data});
			});
	};
}

export function getPokemonById(id) {
	return (dispatch) => {
		return axios
			.get(`${REACT_APP_BACKEND_URL}/pokemon/${id}`)
			.then((r) => {
				dispatch({type: GET_POKEMON_ID, payload: r.data});
			})
			.catch((err) => {
				dispatch({type: GET_POKEMON_ID, payload: err});
			});
	};
}

export function filterPokemonsByType(type) {
	return {
		type: FILTER_TYPE_POKEMON,
		payload: type,
	};
}

export function filterPokemonsByOrigin(type) {
	return {
		type: FILTER_ORIGIN_POKEMON,
		payload: type,
	};
}

export function sortPokemons(type) {
	return {
		type: SORT_POKEMONS,
		payload: type,
	};
}

export function clearPokemonSpecs() {
	return {type: CLEAR_POKEMON_SPECS};
}

export function clearPokemonSearch() {
	return {type: CLEAR_POKEMON_SEARCH};
}
