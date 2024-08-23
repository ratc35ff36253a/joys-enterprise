import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
	return (
		<footer className="footer">
		<p>&copy; {new Date().getFullYear()} Joy's Enterprise. All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
