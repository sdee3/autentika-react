import React from 'react';

export default function Contact() {
	return (
		<section className="contact" id="contact">
			<div className="container">
				<h2>Contact Us</h2>
				<section className="contact-sections">
					<section>
						<h3>Leave a message</h3>
						<form>
							<input placeholder="Your name" type="text" />
							<input placeholder="Your e-mail address" type="email" />
							<textarea placeholder="Your message..." rows="12" />
							<input
								className="button button--orange"
								type="submit"
								value="Submit"
							/>
						</form>
					</section>
					<section>
						<h3>Contact Info</h3>
					</section>
				</section>
			</div>
		</section>
	);
}
