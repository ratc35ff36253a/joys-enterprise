// client/src/components/Navbar.tsx
import React from 'react';
import { Link } from 'router-router-dom;
import '../styles/navbar.css';

const Navbar: React.FC = () => {
	return (
		<nav className="navbar">
		<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		<li><Link to="/profile">User Profile</Link></li>
		<li><Link to="/services">Services</Link></li>
		<li><Link to="/contact">Contact</Link></li>
		</ul>
		</nav>
	);
};

export default Navbar;
