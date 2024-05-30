import { Header } from './components';

import { parsePlanetNamesAndImages } from './utils';
// Global stylings
import './styles/theme.css';
import './styles/main.css';

import './App.css';

const planetNamesAndImages = parsePlanetNamesAndImages();

function App() {
	return (
		<div className='App'>
			<Header data={planetNamesAndImages} />
		</div>
	);
}

export default App;
