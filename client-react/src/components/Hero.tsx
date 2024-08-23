// src/components/Hero.tsx
import React from 'react';
import '../styles/hero.css'; // Import hero-specific styles

const Hero: React.FC = () => (
	<section className="hero">
	<h2>Welcome to JOY'S ENTERPRISE</h2>
	<p>Your success is our mission.</p>
	<a href="/contact" className="cta-button">Get in Touch</a>
	</section>
);

export default Hero;
