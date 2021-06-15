/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import LandingStyle from './styled';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons, getTypes} from '../../actions/index';
import PikachuFondo from '../../assets/PikachuFondo.jpg';

/**
 *
 * Bienvenido a Pokemon App
 * Aquí puedes ver un listado de pokemones, ordenarlos y filtrarlos.
 * tambien puedes ver sus especificaciones, buscar por nombre y si quieres puedes crear pokemones
 */

function LandingPage() {
	const dispatch = useDispatch();
	const pokemonsLoaded = useSelector((store) => store.pokemonsLoaded);
	useEffect(() => {
		dispatch(getPokemons());
		dispatch(getTypes());
	}, []);
	return (
		<LandingStyle>
			<section>
				<img src={PikachuFondo} alt='landingImage' className='bg' />
				<div className='content'>
					<h2>Bienvenido a PokemonApp</h2>
					<p>
						Aquí puedes ver un listado de pokemones, ordenarlos y filtrarlos.
						<br />
						Tambien puedes ver sus especificaciones, buscar por nombre y si
						quieres puedes crear pokemones
					</p>
					<Link to='/home/pokemons' className='link'>
						Ir
					</Link>
				</div>
				<p className='copyRight'>©2021 Pedro Contreras</p>
			</section>
		</LandingStyle>
	);
}

export default LandingPage;
