import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Planet, NotFound } from './pages';
import { Header } from './components';

import { parsePlanetNames, handleScrollDown } from './utils';
// Global stylings
import './styles/theme.css';
import './styles/main.css';

import './App.css';

const planetNames = parsePlanetNames();

function App() {
	useEffect(() => {
		document.addEventListener('scroll', handleScrollDown);

		return () => {
			document.removeEventListener('scroll', handleScrollDown);
		};
	}, []);

	return (
		<div className='App'>
			<Header planetNames={planetNames} />
			<main className='App__main'>
				<Routes>
					<Route path='/:planetName' element={<Planet />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
