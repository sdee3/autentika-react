import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ article, category }) {
	const { caption, cover_url, title, slug, author_name } = article;

	return (
		<Link className="blog-post__link" to={`/blog/${slug}`}>
			<section className="blog-post__card">
				<img
					alt={`${title} - Cover image`}
					className="blog-post__cover-img"
					src={cover_url}
				/>
				<h3 className="blog-post__title">{title}</h3>
				<p className="">{caption}</p>
				<section className="blog-post__category container">
					<span className="author">
						{author_name !== null ? `by ${author_name}` : null}
					</span>
					<span className="category-label">{category}</span>
				</section>
			</section>
		</Link>
	);
}
