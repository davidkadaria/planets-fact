import { Header } from './components';

import { parsePlanetNames } from './utils';
// Global stylings
import './styles/theme.css';
import './styles/main.css';

import './App.css';

const planetNames = parsePlanetNames();

function App() {
	return (
		<div className='App'>
			<Header planetNames={planetNames} />
		</div>
	);
}

export default App;
