// client/src/components/StyledButton.tsx
import React from 'react';
import '../styles/styled-button.css'; // Import button-specific styles

interface StyledButtonProps {
	onClick: () => void;
	children: React.ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ onClick, children }) => (
	<button className="styled-button" onClick={onClick}>
	{children}
	</button>
);

export default StyledButton;
