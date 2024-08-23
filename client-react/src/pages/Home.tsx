// client/src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import StyledButton from '../components/StyledButton';

const Home: React.FC = () => {
	// Theme context
	const { theme, setTheme } = useTheme();

	// State for API message
	const [message, setMessage] = useState<string>('');

	// Fetching data from API
	useEffect(() => {
		fetch('http://localhost:5000/api/test')
		.then(response => response.json())
		.then(data => setMessage(data.message))
		.catch(error => console.error('Error fetching data:', error)); }, []);

		return (
			<div>
			<h1>Home Page - Theme: {theme}</h1>
			<p>{message}</p>
			<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			Toggle theme
			</button>
			<StyledButton onClick={() => console.log('Button clicked')}>Click Me</StyledButton>
			</div>
		);
};

export default Home;
