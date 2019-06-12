import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
	return (
		<section className="services-page">
			<div className="container">
				<h1>Services</h1>
				<ul>
					<li>
						<Link to="/services/export-market-intelligence">
							Export Market Intelligence
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}
