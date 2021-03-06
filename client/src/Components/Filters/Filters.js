import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	filterPokemonsByType,
	sortPokemons,
	filterPokemonsByOrigin,
} from '../../actions/index';
import './styles.css';

export default function Filter() {
	const [order, setOrder] = useState('');
	const [filterTypes, setFilterTypes] = useState('all');
	const [filter, setFilter] = useState('all');
	const types = useSelector((store) => store.types);

	const dispatch = useDispatch();

	const handleChangeFilter = (e) => {
		setFilter(e.target.value);
	};

	const handleChangeTypes = (e) => {
		setFilterTypes(e.target.value);
	};

	const handleChangeOrder = (e) => {
		setOrder(e.target.value);
	};

	useEffect(() => {
		dispatch(filterPokemonsByOrigin(filter));
		dispatch(filterPokemonsByType(filterTypes));
		dispatch(sortPokemons(order));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterTypes, filter, order]);

	return (
		<div className='filters'>
			<div className='sort'>
				<label htmlFor='order'>Ordenar por</label>
				<select name='order' onChange={handleChangeOrder}>
					<option value='none'>none</option>
					<option value='high-low'>Más Fuerte</option>
					<option value='low-high'>Más Débilr</option>
					<option value='A-Z'>A-Z</option>
					<option value='Z-A'>Z-A</option>
				</select>
			</div>
			<div className='origin'>
				<label htmlFor='filter'>Filtrar por Origen</label>
				<select name='filter' onChange={handleChangeFilter}>
					<option value='all'>All</option>
					<option value='created'>Pokemones Creados</option>
					<option value='exists'>Pokemones Originales</option>
				</select>
			</div>
			<div className='types'>
				<label htmlFor='types'>Filtrar por Tipos</label>
				<select name='Types' onChange={handleChangeTypes}>
					<option value='all'>Todos</option>
					{types &&
						types.map((t) => (
							<option
								key={`${t.name}`}
								value={`${t.name}`}
							>{`${t.name}`}</option>
						))}
				</select>
			</div>
		</div>
	);
}
