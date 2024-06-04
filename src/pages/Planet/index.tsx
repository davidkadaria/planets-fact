import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
	parsePlanetNames,
	parseParticularPlanetData,
	getImagePropertyNameByTab,
} from '../../utils';
import { buttonData, detailsData } from './data';
import './Planet.css';

const planetNames: string[] = parsePlanetNames();

function Planet() {
	const [tab, setTab] = useState<'overview' | 'structure' | 'surface'>('overview');

	const { planetName } = useParams();
	const navigate = useNavigate();

	const planetData = useMemo(() => {
		return parseParticularPlanetData(planetName!);
	}, [planetName]);

	useEffect(() => {
		if (!planetNames.find((name) => name.toLowerCase() === planetName)) {
			navigate('/mercury', { replace: true });
		}

		return () => {
			setTab('overview');
		};
	}, [navigate, planetName]);

	if (!planetData) return null;

	return (
		<div className='Planet'>
			<section className='Planet__info'>
				<div className='Planet__image'>
					<img src={planetData.images[getImagePropertyNameByTab(tab)]} alt={planetData.name} />
				</div>
				<div className='Planet__description'>
					<div className='Planet__dynamic-info'>
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
					</div>
					<div className='Planet__info__buttons'>
						{buttonData.map((button) => (
							<button
								key={button.id}
								className={`Planet__info__button${
									tab === button.label ? ' Planet__info__button--active' : ''
								}`}
								onClick={() => {
									setTab(button.label);
								}}
							>
								<span>{button.id}</span>
								{button.label}
							</button>
						))}
					</div>
				</div>
			</section>
			<section className='Planet__details'>
				{detailsData.map((detail) => (
					<div className='Planet__detail' key={detail.key}>
						<span className='Planet__detail__label'>{detail.label}</span>
						<span className='Planet__detail__value'>{planetData[detail.key]}</span>
					</div>
				))}
			</section>

			<style>{`
				:root {
					--primary: var(--${planetName}-theme);
				}
			`}</style>
		</div>
	);
}

export { Planet };
