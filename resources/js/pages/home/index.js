import React, { lazy } from 'react';

const AboutUs = lazy(() => import('./AboutUs'));
const Services = lazy(() => import('./Services'));
const Promo = lazy(() => import('./Promo'));
const Clients = lazy(() => import('./Clients'));
const Contact = lazy(() => import('./Contact'));

export default function Home() {
	return (
		<section className="home-page">
			<section className="home-page__main-img">
				<div className="container">
					<h1>Bringing International Buyers Directly to You!</h1>
					<h2>Practical and down to earth market intelligence to exporters</h2>
					<h3>
						We don’t just make simple statistics nor create a long list of
						companies. We actually find your perfect match and bring prospects
						at your door.
					</h3>
				</div>
			</section>
			<AboutUs />
			<Services />
			<Promo
				heading="Ready to empower your business?"
				content="Build your business partnerships and enhance your clientele with
					Autentika!"
			/>
			<Clients />
			<Contact />
		</section>
	);
}
