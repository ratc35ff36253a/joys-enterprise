// client/src/components/Navbar.tsx
import React from 'react';
import { Link } from 'router-router-dom;

const Navbar: React.FC = () => {
	return (
		<nav>
		<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		</ul>
		</nav>
	);
};

export default Navbar;
