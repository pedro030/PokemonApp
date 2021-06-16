/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function Card(props) {
	return (
		<div className='card'>
			<img src={`${props.img}`} alt={`${props.name} image`} />
			<p className='name'>{props.name}</p>
			<div className='types'>
				<p>Types</p>
				{props.types && props.types.map((t) => <span key={`${t}`}>{t}</span>)}
			</div>
			<Link to={`/home/pokemons/${props.id}`}>
				<button className='btn-more'>More Details</button>
			</Link>
		</div>
	);
}
