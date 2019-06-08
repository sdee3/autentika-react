import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<section className="navbar">
			<div className="container">
				<div className="navbar__brand">
					<Link to="/">
						<img
							alt="KickAssGrowth navbar logo"
							src="https://kickassgrowth.com/wp-content/uploads/2019/01/logo-2.png"
						/>
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
					<Link to="/">Services</Link>
					<Link to="/">Packages</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/">Contact</Link>
				</section>
			</div>
		</section>
	);
}
