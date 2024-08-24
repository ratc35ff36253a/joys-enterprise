import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
	const { theme, setTheme } = useTheme() ;

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<button onClick={toggleTheme} style={{ position: 'absolute', right: '1rem', top: '1rem' }}>
		{theme === 'light' ? <FaMoon /> : <FaSun />}
		</button>
	);
};

export default ThemeToggle;
