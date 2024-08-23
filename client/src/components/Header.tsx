// src/components/Header.tsx
import React from 'react';
import '../styles/header.css';

const Header: React.FC = () => {
	return (
		<header className="header">
		<div className="logo">
		<h1>JOY'S ENTERPRISE</h1>
		</div>
		<nav>
		<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/services">Services</a></li>
		<li><a href="/contact">Contact</a></li>
		</ul>
		</nav>
		</header>
	);
};

export default Header;
