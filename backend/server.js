// backend/sever.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());                 // Enable CORS

app.get('/', (req, res) => {
	res.send('Backend is running...');
});

// New endpoint example
app.get('/api/test', (req, res) => {
	res.json({ message: 'This is a test endpoint' });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

