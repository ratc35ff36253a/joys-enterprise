// backend/sever.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());                 // Enable CORS
app.use(express.json());        // Enable JSON parsing for incoming requests

// Root route to confirm backend is running
app.get('/', (req, res) => {
	res.send('Backend is running...');
});

// Existing test endpoint example
app.get('/api/test', (req, res) => {
	res.json({ message: 'This is a test endpoint' });
});

// New data endpoint for frontend consumption
app.get('/api/data', (req, res) => {
	res.json({ message: 'Hello from the backend!', data: [1, 2, 3, 4, 5] });
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

