// client/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ClientLayout from './layouts/ClientLayout';


const App: React.FC = () => {
	return (
		<Router>
		<ClientLayout>
		<switch>
		<Route path="/" exact component={Home} />
		<Route path="/about" component={About} />
		<Route path="/user/:id" component={UserProfile} />
		{/* Add more routes as needed */}
		</switch>
		</ClientLayout>
		</Router>
	);
};

export default App;
