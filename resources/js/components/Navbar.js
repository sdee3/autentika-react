import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<section className="navbar">
			<div className="container">
				<div className="navbar__brand">
					<Link to="/">
						<img
							alt="Autentika Global navbar logo"
							src="https://res.cloudinary.com/sdee3-com/image/upload/v1560004828/autentika/autentika-logo.png"
						/>
						<p>Autentika Global</p>
					</Link>
				</div>
				<input type="checkbox" id="nav-check" />
				<section className="navbar__mobile-buttons">
					<label htmlFor="nav-check">
						<span />
						<span />
						<span />
					</label>
				</section>
				<section className="navbar__links">
					<Link to="/">Home</Link>
					<Link to="/export-intelligence-questionnaire">Questionnaire</Link>
					<Link to="/services">Services</Link>
					<Link to="/blog">Blog</Link>
					<a href="#contact">Contact</a>
				</section>
			</div>
		</section>
	);
}
