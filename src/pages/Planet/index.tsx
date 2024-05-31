import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
	parsePlanetNames,
	parseParticularPlanetData,
	getImagePropertyNameByTab,
} from '../../utils';
import './Planet.css';

const planetNames = parsePlanetNames();

function Planet() {
	const [tab, setTab] = useState<'overview' | 'structure' | 'geology'>('overview');

	const { planetName } = useParams();
	const navigate = useNavigate();

	const planetData = useMemo(() => {
		return parseParticularPlanetData(planetName!);
	}, [planetName]);

	useEffect(() => {
		// Validate the planet name
		if (!planetNames.find((name) => name.toLowerCase() === planetName)) {
			// If the planet name is not valid, redirect to the default planet page
			navigate('/mercury', { replace: true });
		}
	}, [navigate, planetName]);

	if (!planetData) return null;

	return (
		<div className='Planet'>
			<section className='Planet__info'>
				<div className='Planet__image'>
					<img src={planetData.images[getImagePropertyNameByTab(tab)]} alt={planetData.name} />
				</div>
				<div className='Planet__description'>
					<h1 className='Planet__name'>{planetData.name}</h1>
					<p className='Planet__summary'>{planetData[tab].content}</p>
					<a
						className='Planet__source'
						href={planetData[tab].source}
						target='_blank'
						rel='noopener noreferrer'
					>
						Wikipedia
					</a>
					<div className='Planet__info__buttons'>
						<button
							className='Planet__info__button'
							onClick={() => {
								setTab('overview');
							}}
						>
							01 OVERVIEW
						</button>
						<button
							className='Planet__info__button'
							onClick={() => {
								setTab('structure');
							}}
						>
							02 STRUCTURE
						</button>
						<button
							className='Planet__info__button'
							onClick={() => {
								setTab('geology');
							}}
						>
							03 SURFACE
						</button>
					</div>
				</div>
			</section>
			<section className='Planet__details'></section>
		</div>
	);
}

export { Planet };
