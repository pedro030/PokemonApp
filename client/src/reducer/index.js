import {
	GET_POKEMONES,
	GET_POKEMON_ID,
	FILTER_TYPE_POKEMON,
	FILTER_ORIGIN_POKEMON,
	SORT_POKEMONS,
	GET_POKEMON_NAME,
	GET_TYPES,
	ADD_POKEMON,
	CLEAR_POKEMON_SEARCH,
	CLEAR_POKEMON_SPECS,
} from '../constants';

const initialData = {
	pokemonsLoaded: [],
	pokemonsShowed: [],
	pokemonsFiltered: [],
	myPokemons: [],
	pokemonSpecs: {},
	pokemonSearch: {},
	types: [],
};

export default function rootReducer(state = initialData, action) {
	switch (action.type) {
		case ADD_POKEMON:
			return {...state, myPokemons: [...state.myPokemons, action.payload]};
		case GET_TYPES:
			return {...state, types: action.payload};
		case GET_POKEMONES:
			return {
				...state,
				pokemonsLoaded: action.payload.api,
				myPokemons: action.payload.db,
				pokemonsShowed: action.payload.api.concat(action.payload.db),
			};
		case GET_POKEMON_NAME:
			return {...state, pokemonSearch: action.payload};
		case GET_POKEMON_ID:
			return {...state, pokemonSpecs: action.payload};
		case FILTER_ORIGIN_POKEMON:
			if (action.payload === 'created') {
				return {...state, pokemonsFiltered: state.myPokemons};
			} else if (action.payload === 'exists') {
				return {...state, pokemonsFiltered: state.pokemonsLoaded};
			} else {
				return {
					...state,
					pokemonsFiltered: state.pokemonsLoaded.concat(state.myPokemons),
				};
			}
		case FILTER_TYPE_POKEMON:
			if (action.payload === 'all') {
				return {...state, pokemonsShowed: state.pokemonsFiltered};
			} else {
				return {
					...state,
					pokemonsShowed: state.pokemonsFiltered.filter((el) =>
						el.types.includes(action.payload)
					),
				};
			}
		case SORT_POKEMONS:
			if (action.payload === 'low-high') {
				console.log('Sorting');
				return {
					...state,
					pokemonsShowed: state.pokemonsShowed.sort((a, b) => {
						return a.attack - b.attack;
					}),
				};
			} else if (action.payload === 'high-low') {
				console.log('Sorting');
				return {
					...state,
					pokemonsShowed: state.pokemonsShowed.sort((a, b) => {
						return b.attack - a.attack;
					}),
				};
			} else if (action.payload === 'Z-A') {
				console.log('Sorting');
				return {
					...state,
					pokemonsShowed: state.pokemonsShowed.sort((a, b) => {
						let aName = a.name.toLowerCase();
						let bName = b.name.toLowerCase();
						if (aName < bName) {
							return 1;
						}
						if (aName > bName) {
							return -1;
						}
						return 0;
					}),
				};
			} else if (action.payload === 'A-Z') {
				console.log('Sorting');
				return {
					...state,
					pokemonsShowed: state.pokemonsShowed.sort((a, b) => {
						let aName = a.name.toLowerCase();
						let bName = b.name.toLowerCase();
						if (aName > bName) {
							return 1;
						}
						if (aName < bName) {
							return -1;
						}
						return 0;
					}),
				};
			} else {
				return {...state, pokemonsShowed: state.pokemonsShowed};
			}
		case CLEAR_POKEMON_SPECS:
			return {...state, pokemonSpecs: {}};
		case CLEAR_POKEMON_SEARCH:
			return {...state, pokemonSearch: {}};
		default:
			return state;
	}
}
// none
// higher-lower
// lower-higher
// A-Z
// Z-A
