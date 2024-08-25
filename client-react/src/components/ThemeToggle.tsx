import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
	const { theme, setTheme } = useTheme() ;

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<button className="theme-toggle" onClick={toggleTheme}>
		{theme === 'light' ? <FaMoon /> : <FaSun />}
		</button>
	);
};

export default ThemeToggle;
