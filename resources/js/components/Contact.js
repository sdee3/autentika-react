import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
	return (
		<section className="contact" id="contact">
			<div className="container">
				<h2>Contact Us</h2>
				<section className="contact-sections">
					<section>
						<h3>Leave a message</h3>
						<ContactForm />
					</section>
					<section>
						<h3>Contact Info</h3>
						<p>Autentika Global</p>
						<p>Karadjordjeva 175/16</p>
						<p>Valjevo</p>
						<p>Serbia</p>
						<br />
						<p>
							Email us:{' '}
							<a href="mailto:aleksandar@autentikaglobal.com">
								aleksandar@autentikaglobal.com
							</a>
						</p>
					</section>
				</section>
			</div>
		</section>
	);
}
