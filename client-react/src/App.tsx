// client/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './pages/UserProfile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainLayout from './layouts/MainLayout';
import ThemeToggle from './components/ThemeToggle';
import DataFetcher from './components/DataFetcher';
import './styles/global.css';


const App: React.FC = () => {
        return (
                <Router>
                <MainLayout>
		<ThemeToggle />
                <DataFetcher>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<UserProfile />} />
                {/* Add more routes as needed */}
                </Routes>
                </DataFetcher>
                </MainLayout>
                </Router>
        );
};

export default App;

