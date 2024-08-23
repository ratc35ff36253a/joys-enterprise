// client/src/pages/UserProfile.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile: React.FC = () => {
	const { id } = useParams<{ id: string }>();

	return (
		<div>
		<h1>User Profile</h1>
		<p>User ID: {id}</p>
		{/* Fetch and display user data based on ID */}
		</div>
	);
};

export default UserProfile;
