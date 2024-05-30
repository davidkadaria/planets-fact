import type { Props } from './types';
import './Header.css';

function Header({ data }: Props) {
	return (
		<header className='Header'>
			<h1>Header</h1>
		</header>
	);
}

export { Header };
