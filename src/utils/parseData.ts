import planetsData from '../data.json';
import type { Planet } from '.';

function parseData(): Planet[] {
	return planetsData as Planet[];
}

function parsePlanetNames(): string[] {
	return planetsData.map(({ name }) => name);
}

function parseParticularPlanetData(planetName: string): Planet {
	return planetsData.find(({ name }) => name.toLowerCase() === planetName) as Planet;
}

export { parseData, parsePlanetNames, parseParticularPlanetData };
