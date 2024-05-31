import { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { parsePlanetNames, parseParticularPlanetData } from '../../utils';
import type { Planet as PlanetType } from '../../utils';

const planetNames = parsePlanetNames();

function Planet() {
	const { planetName } = useParams();
	const navigate = useNavigate();

	const planetData: PlanetType = useMemo(() => {
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

	return <div>{planetData.name}</div>;
}

export { Planet };
