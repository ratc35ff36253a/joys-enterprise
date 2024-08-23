import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
		<Header />
		<main>{children}</main>
		<Footer />
		</>
	);
};

export default MainLayout;
