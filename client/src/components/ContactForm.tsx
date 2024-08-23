// src/components/ContactForm.tsx
import React from 'react';
import '../styles/contact-form.css';                                  // Import contact form-specific styles

const ContactForm: React.FC = () => (
	<form className="contact-form">
	<label htmlFor="name">Name</label>
	<input type="text" id="name" name="name" required />

	<label htmlFor="email">Email</label>
	<input type="email" id="email" name="email" required />

	<label htmlFor="message">Message</label>
	<textarea id="message" name="message" required></textarea>

	<button type="submit">Send Message</button>
	</form>
);

export default ContactForm;
