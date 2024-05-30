import planetsData from '../data.json';
import type { Planet } from '.';

function parseData(): Planet[] {
	return planetsData as Planet[];
}

function parsePlanetNames(): string[] {
	return planetsData.map(({ name }) => name);
}

export { parseData, parsePlanetNames };
