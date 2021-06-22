import React, {useState, useEffect} from 'react';
import './styles.css';

import Card from '../Card/Card';

export default function Cards(props) {
	const {show} = props;
	const [page, setPage] = useState(0);
	const totalPages =
		show.length % 8 === 0 ? show.length / 8 : Math.floor(show.length / 8) + 1;

	useEffect(() => {
		setPage(0);
	}, [show]);

	return (
		<div className='page'>
			{show.length > 0 ? (
				<ul className='list'>
					{show &&
						show.slice(page * 8, page * 8 + 8).map((pokemon) => (
							<li key={pokemon.id}>
								<Card
									name={pokemon.name}
									img={pokemon.img}
									id={pokemon.id}
									types={pokemon.types}
								/>
							</li>
						))}
				</ul>
			) : (
				<p>Sin resultados</p>
			)}
			{page > 0 ? (
				<button onClick={() => setPage(page - 1)}>Anterior</button>
			) : null}
			<p>Página {page + 1}</p>
			{page < totalPages - 1 ? (
				<button onClick={() => setPage(page + 1)}>Siguiente</button>
			) : null}
		</div>
	);
}
