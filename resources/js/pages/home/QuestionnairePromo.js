import React from 'react';
import { Link } from 'react-router-dom';

export default function Questionnaire() {
	return (
		<section className="home-page__questionnaire-promo">
			<div className="container">
				<h2>Check Your Export Intelligence in 5 Easy Steps</h2>
				<Link to="/export-intelligence-questionnaire">
					<button className="button button--orange">Start Now</button>
				</Link>
			</div>
		</section>
	);
}
