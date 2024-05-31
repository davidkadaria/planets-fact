import planetsData from '../data.json';
import type { Planet } from '.';

function parsePlanetNames(): string[] {
	return planetsData.map(({ name }) => name);
}

function parseParticularPlanetData(planetName: string): Planet {
	return planetsData.find(({ name }) => name.toLowerCase() === planetName) as Planet;
}

export { parsePlanetNames, parseParticularPlanetData };
