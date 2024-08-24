// client/src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Create the ThemeContext with an undefined default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to provide theme state and updater
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<string>('light');

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
		{children}
		</ThemeContext.Provider>
	);
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
