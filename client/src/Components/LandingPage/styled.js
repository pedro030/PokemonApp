import styled from 'styled-components';

const LandingStyle = styled.div`
	background: rgb(0, 0, 0);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(254, 218, 0, 1) 71%
	);
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
	section {
		padding: 100px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		min-height: 100vh;
		.bg {
			position: absolute;
			top: 0;
			right: 0;
			height: 100%;
		}
		.content {
			position: relative;
			max-width: 650px;
			z-index: 1;
			h2 {
				color: #ffffff;
				font-size: 3em;
				font-weight: 700;
				line-height: 1.1em;
			}
			p {
				color: #ffffff;
				font-size: 1.1em;
				margin: 20px 0 10px;
			}
			.link {
				color: #ffffff;
				background: #f60f20;
				font-size: 1em;
				margin: 20px 0;
				font-weight: 500;
				padding: 10px 30px;
				display: inline-block;
				text-decoration: none;
			}
		}
		.copyRight {
			position: absolute;
			bottom: 20px;
			color: #ffffff;
			font-size: 1.1em;
			margin: 20px 0 10px;
		}
	}
	@media (max-width: 768px) {
		section {
			padding: 100px 40px;
			.content h2 {
				font-size: 2.5em;
			}
			.bg {
				position: absolute;
				top: 0;
				right: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				opacity: 0.5;
			}
		}
	}
`;
export default LandingStyle;
