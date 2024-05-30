import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HamburgerMenuIcon from '../../assets/icon-hamburger.svg';
import type { Props } from './types';
import './Header.css';

function Header({ planetNames }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	return (
		<header className='Header'>
			<div className='Header__topbar'>
				<h1 className='Header__title'>The Planets</h1>
				<div
					className={`Header__menu-toggle${isMenuOpen ? ' Header__menu-toggle--open' : ''}`}
					onClick={() => {
						setIsMenuOpen((prevState) => !prevState);
					}}
				>
					<img src={HamburgerMenuIcon} alt='Menu' />
				</div>
			</div>
			<nav className={`Header__nav${isMenuOpen ? ' Header__nav--open' : ''}`}>
				<ul className='Header__nav-list'>
					{planetNames.map((planet) => (
						<li
							key={planet}
							className={`Header__nav-item${
								`/${planet.toLowerCase()}` === location.pathname ? ' Header__nav-item--active' : ''
							}`}
							onClick={() => {
								navigate(`/${planet.toLowerCase()}`);
								if (isMenuOpen) setIsMenuOpen(false);
							}}
						>
							<div
								className='Header__nav-item-color'
								style={{
									backgroundColor: `var(--${planet.toLowerCase()})`,
								}}
							/>
							{planet}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export { Header };
