import React, { lazy } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../Helpers';

const ArticleCard = lazy(() => import('./ArticleCard'));
const Breadcrumbs = lazy(() => import('../../components/Breadcrumbs'));
const CategoryWidget = lazy(() => import('./CategoryWidget'));

export default function Blog() {
	const [blogPosts, setBlogPosts] = React.useState([]);
	const [originalBlogPosts, setOriginalBlogPosts] = React.useState([]);

	React.useEffect(() => {
		axios
			.get('/api/articles')
			.then(res => {
				setBlogPosts(res.data);
			})
			.catch(err => console.error(err.response.data));
	}, []);

	const filterByCategory = categoryName => {
		if (!originalBlogPosts.length) {
			setOriginalBlogPosts(blogPosts);
		}

		if (categoryName) {
			const unfiltered = originalBlogPosts.length
				? originalBlogPosts
				: blogPosts;
			const filtered = unfiltered.filter(c => c.category.name === categoryName);

			setBlogPosts(filtered);
		} else {
			if (categoryName) {
				setBlogPosts(originalBlogPosts);
				setOriginalBlogPosts([]);
			} else {
				setBlogPosts(originalBlogPosts);
			}
		}
	};

	return (
		<>
			<Breadcrumbs page={<Link to="/blog">Blog</Link>} />
			<section className="blog-page container">
				<div className="blog-page__top-heading">
					<h1>Blog</h1>
					{isAuthenticated() ? (
						<Link to="/blog/new">
							<button className="button">New Article</button>
						</Link>
					) : null}
				</div>
				<section className="blog-page__blog-posts">
					<section className="blog-article">
						{blogPosts.length ? (
							blogPosts.map((blogPost, index) => (
								<ArticleCard
									article={blogPost}
									key={index}
									category={blogPost.category.name}
								/>
							))
						) : (
							<h2>No results found.</h2>
						)}
					</section>
					<CategoryWidget filterByCategory={filterByCategory} />
				</section>
			</section>
		</>
	);
}
