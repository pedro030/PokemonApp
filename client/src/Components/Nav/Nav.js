import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NavStyle from './styled';

export function Nav() {
	const [show, setshow] = useState(false);
	const toggle = () => {
		setshow(!show);
	};
	return (
		<NavStyle>
			<div>
				<Link to='/home/pokemons' className='logo'>
					PokemonApp
				</Link>
			</div>
			<div
				className={`menuToggle ${show ? 'active' : null}`}
				onClick={() => toggle()}
			></div>
			<div className={`navigation ${show ? 'active' : null}`}>
				<ul>
					<li>
						<Link
							to='/home/pokemon/create'
							className='link'
							onClick={() => toggle()}
						>
							Create Pokemon
						</Link>
					</li>
					<li>
						<Link
							to='/home/pokemon/search'
							className='link'
							onClick={() => toggle()}
						>
							Search Pokemon
						</Link>
					</li>
				</ul>
			</div>
		</NavStyle>
	);
}

export default Nav;
