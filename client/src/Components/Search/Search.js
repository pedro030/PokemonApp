import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearPokemonSearch, getPokemonName} from '../../actions/index';
import Caracteristicas from '../Specs/Caracteristicas';
import './styles.css';

export default function Search() {
	const [name, setName] = useState('');
	const dispatch = useDispatch();

	// const pokemonSearch = useSelector(store=>store.pokemonSearch)
	const pokemonSearch = useSelector((store) => store.pokemonSearch);
	function handleChange(e) {
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (name.length) {
			dispatch(getPokemonName(name.toLowerCase()));
		}
	}
	useEffect(() => {
		return () => {
			dispatch(clearPokemonSearch());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='home'>
			<div className='search-bar'>
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						className='input-text'
						type='text'
						placeholder='Busca un pokemon'
						value={name}
						onChange={(e) => handleChange(e)}
					/>
					<input className='input-btn' type='submit' value='Buscar' />
				</form>
			</div>
			{pokemonSearch.error ? (
				<h2 className='notFound'>{pokemonSearch.error}</h2>
			) : (
				<Caracteristicas pokemon={pokemonSearch} />
			)}
		</div>
	);
}
