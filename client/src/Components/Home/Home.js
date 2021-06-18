import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons, getTypes} from '../../actions/index';
import './styles.css';

// components
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';

// export function Home(props){
export default function Home() {
	const dispatch = useDispatch();

	const pokemonsShowed = useSelector((store) => store.pokemonsShowed);
	useEffect(() => {
		dispatch(getPokemons());
		dispatch(getTypes());
	}, []);

	return (
		<div className='home'>
			<Filters />
			<Cards className='card' show={pokemonsShowed} />
		</div>
	);
}
