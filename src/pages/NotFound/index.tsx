import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
	const navigate = useNavigate();

	useEffect(() => {
		// Redirect to the default planet page
		navigate('/mercury', { replace: true });
	}, [navigate]);

	return null;
}

export { NotFound };
