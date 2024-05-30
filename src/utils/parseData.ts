import planetsData from '../data.json';
import type { Planet, PlanetNameAndImages } from '.';

function parseData(): Planet[] {
	return planetsData as Planet[];
}

function parsePlanetNamesAndImages(): PlanetNameAndImages[] {
	return planetsData.map(({ name, images }) => ({ name, images })) as PlanetNameAndImages[];
}

export { parseData, parsePlanetNamesAndImages };
