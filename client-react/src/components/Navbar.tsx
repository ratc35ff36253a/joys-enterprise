// client/src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
	const { theme, setTheme } = useTheme();

	// Function to toggle between light and dark themes
	const toggleTheme = () => {
		setTheme(Theme === 'light' ? 'dark' : 'light');
	};

	return (
		<header className="navbar">
		<nav>
		<button onClick={toggleTheme} style={{ float: 'right' }}>
		{theme === 'light' ? <FaMoon /> : <FaSun />}
		</button>
		<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		<li><Link to="/profile">User Profile</Link></li>
		<li><Link to="/services">Services</Link></li>
		<li><Link to="/contact">Contact</Link></li>
		</ul>
		</nav>
		</header>
	);
};

export default Navbar;
