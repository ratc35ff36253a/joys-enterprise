import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout: React.FC = ({ children }) => {
	return (
		<>
		<Header />
		<main>{children}</main>
		<Footer />
		</>
	);
};
