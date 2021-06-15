import styled from 'styled-components';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
const NavStyle = styled.div`
	background: rgba(254, 218, 0, 1);
	.logo {
		color: #ffffff;
		font-weight: 700;
		font-size: 2em;
		z-index: 100;
		display: inline-block;
		text-decoration: none;
		margin: 5px 15px;
	}
	.menuToggle {
		position: fixed;
		top: 0;
		right: 0;
		width: 60px;
		height: 60px;
		background: #f60f20 url(${menu});
		background-repeat: no-repeat;
		background-position: center;
		background-size: 30px;
		cursor: pointer;
		z-index: 1000;
	}
	.menuToggle.active {
		background: #f60f20 url(${close});
		background-repeat: no-repeat;
		background-position: center;
		background-size: 25px;
	}
	.navigation {
		position: fixed;
		top: 0;
		left: calc(100% - 60px);
		width: 100%;
		height: 100%;
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.2s;
		background: rgb(0, 0, 0);
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(254, 218, 0, 1) 71%
		);
		ul {
			position: relative;
			list-style: none;
			li {
				position: relative;
				text-align: center;
				.link {
					font-size: 2.5em;
					color: #fff;
					text-decoration: none;
					font-weight: 300;
					:hover {
						color: #f60f20;
					}
				}
			}
		}
	}
	.navigation.active {
		left: 0;
	}
`;
export default NavStyle;
