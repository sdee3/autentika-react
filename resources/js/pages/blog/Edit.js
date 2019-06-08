import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { quillFormats, quillModules } from '../../Helpers';
import { CategoriesContext } from '../../app';

const ReactQuill = lazy(() => import('react-quill'));

export default function Edit({ match }) {
	const [article, setArticle] = React.useState({});
	const [originalTitle, setOriginalTitle] = React.useState('');
	const [originalSlug, setOriginalSlug] = React.useState('');

	const categories = React.useContext(CategoriesContext);

	React.useEffect(() => {
		const { slug } = match.params;

		axios
			.get(`/api/article/${slug}`)
			.then(res => {
				setArticle(res.data);
				setOriginalTitle(res.data.title);
				setOriginalSlug(slug);
			})
			.catch(err => console.error(err.response));
	}, []);

	const handleChange = value => {
		setArticle({ ...article, content: value });
	};

	const handleRadioChange = e => {
		const newCategory = categories.filter(c => c.name === e.target.value)[0];

		setArticle({ ...article, category_id: newCategory.id });
	};

	const updateArticle = () => {
		axios
			.put(`/api/article/${originalSlug}`, article)
			.then(() => (window.location.href = `/blog/${article.slug}`));
	};

	return Object.keys(article).length ? (
		<section className="blog-page container">
			<Link to={`/blog/${article.slug}`}>
				<button className="button">Go Back</button>
			</Link>
			<h1>You are editing {originalTitle}:</h1>
			<section className="edit-article__inputs">
				<div className="edit-article__inputs--category-select">
					<span>Category:</span>
					<section className="edit-article__category-checkboxes">
						{categories.map(category => (
							<label className="category__container" key={category.id}>
								{category.name}
								<input
									defaultChecked={article.category_id === category.id}
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
					onChange={e => setArticle({ ...article, cover_url: e.target.value })}
					placeholder="Cover Image URL"
					value={article.cover_url}
				/>
				<ReactQuill
					formats={quillFormats}
					modules={quillModules}
					onChange={handleChange}
					value={article.content}
				/>
				<section className="text-center">
					<button className="button" onClick={updateArticle}>
						Save Changes
					</button>
				</section>
			</section>
		</section>
	) : null;
}
