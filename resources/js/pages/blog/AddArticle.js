import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { quillFormats, quillModules } from '../../Helpers';
import axios from 'axios';
import { CategoriesContext } from '../../app';

const Breadcrumbs = lazy(() => import('../../components/Breadcrumbs'));
const ReactQuill = lazy(() => import('react-quill'));

export default function AddArticle() {
	const [article, setArticle] = React.useState({
		title: '',
		caption: '',
		category_id: 0,
		slug: '',
		content: '',
		cover_url: ''
	});

	const categories = React.useContext(CategoriesContext);

	const handleChange = value => setArticle({ ...article, content: value });

	const submitArticle = () => {
		axios
			.post('/api/article', article)
			.then(() => (window.location.href = '/blog'))
			.catch(err => console.error(err.response.data.message));
	};

	const handleRadioChange = e => {
		const newCategory = categories.filter(c => c.name === e.target.value)[0];

		setArticle({ ...article, category_id: newCategory.id });
	};

	return (
		<>
			<Breadcrumbs
				page={
					<>
						<Link to="/blog">Blog</Link>
						<i className="material-icons">keyboard_arrow_right</i>
						<Link to="/blog/new">Add Article</Link>
					</>
				}
			/>
			<section className="blog-page blog-page__add-article container">
				<h1>Add Article</h1>
				<form
					className="add-article__form"
					onSubmit={e => {
						e.preventDefault();
						submitArticle();
					}}
				>
					<div className="edit-article__inputs--category-select">
						<span>Category:</span>
						<section className="edit-article__category-checkboxes">
							{categories.map(category => (
								<label className="category__container" key={category.id}>
									{category.name}
									<input
										name="radio"
										onChange={handleRadioChange}
										type="radio"
										value={category.name}
									/>
									<span className="category__checkmark" />
								</label>
							))}
						</section>
					</div>
					<input
						onChange={e => setArticle({ ...article, title: e.target.value })}
						placeholder="Title"
						value={article.title}
					/>
					<input
						onChange={e => setArticle({ ...article, caption: e.target.value })}
						placeholder="Caption"
						value={article.caption}
					/>
					<div className="input-group-prepend">
						<div className="input-group-prepend__pre-input-text">{`/blog/`}</div>
						<input
							onChange={e => setArticle({ ...article, slug: e.target.value })}
							placeholder="Article URL (automatically starts with /blog/)"
							value={article.slug}
						/>
					</div>
					<input
						onChange={e =>
							setArticle({ ...article, cover_url: e.target.value })
						}
						placeholder="Cover Image URL"
						value={article.cover_url}
					/>
					<ReactQuill
						formats={quillFormats}
						modules={quillModules}
						onChange={handleChange}
						value={article.content}
					/>
					<input className="button" type="submit" value="Submit New Article" />
				</form>
			</section>
		</>
	);
}
