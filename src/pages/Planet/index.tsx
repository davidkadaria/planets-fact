import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import {
	parsePlanetNames,
	parseParticularPlanetData,
	getImagePropertyNameByTab,
} from '../../utils';
import './Planet.css';

const planetNames: string[] = parsePlanetNames();
const buttonData: { id: string; label: 'overview' | 'structure' | 'surface' }[] = [
	{
		id: '01',
		label: 'overview',
	},
	{
		id: '02',
		label: 'structure',
	},
	{
		id: '03',
		label: 'surface',
	},
];
const detailsData: { key: 'rotation' | 'revolution' | 'radius' | 'temperature'; label: string }[] =
	[
		{
			key: 'rotation',
			label: 'Rotation time',
		},
		{
			key: 'revolution',
			label: 'Revolution time',
		},
		{
			key: 'radius',
			label: 'Radius',
		},
		{
			key: 'temperature',
			label: 'Average temp.',
		},
	];

function Planet() {
	const [tab, setTab] = useState<'overview' | 'structure' | 'surface'>('overview');

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

		// return () => {
		// 	setTab('overview');
		// };
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
						{buttonData.map((button) => (
							<Button
								className={`Planet__info__button${
									tab === button.label ? ' Planet__info__button--active' : ''
								}`}
								onClick={() => {
									setTab(button.label);
								}}
							>
								<span>{button.id}</span> {button.label}
							</Button>
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
		</div>
	);
}

export { Planet };
