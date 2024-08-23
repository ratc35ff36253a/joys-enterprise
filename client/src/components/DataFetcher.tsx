// client/src/components/DataFetcher.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher: React.FC = () => {
	const [data, setData] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Fetch data from the backend API
		axios.get('http://localhost:5000/api/data')
		.then(response => {
			setData(response.data.data);
			setLoading(false);
		})
		.catch(err => {
			setError('Failed to fetch data');
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div>
		<h2>Data from Backend:</h2>
		<ul>
		{data.map((item, index) => (
			<li key={index}>{item}</li>
		))}
		</ul>
		</div>
	);
};

export default DataFetcher;
