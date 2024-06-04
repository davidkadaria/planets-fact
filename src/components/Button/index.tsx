import type { Props } from './types';
import './Button.css';

function Button({ className, onClick, children }: Props) {
	return (
		<button className={`Button ${className}`} onClick={onClick}>
			{children}
		</button>
	);
}

export { Button };
