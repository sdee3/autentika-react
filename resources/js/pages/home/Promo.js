import React from 'react';

export default function Promo({ content, heading }) {
	return (
		<section className="home-page__promo">
			<div className="container">
				<h2>{heading}</h2>
				<p>{content}</p>
				<a href="#contact">
					<button className="button button--orange">Contact Us!</button>
				</a>
			</div>
		</section>
	);
}
