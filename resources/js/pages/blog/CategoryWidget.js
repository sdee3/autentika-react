import React from 'react';
import { CategoriesContext } from '../../app';

export default function CategoryWidget({ filterByCategory }) {
	const categoriesContext = React.useContext(CategoriesContext);

	return (
		<section className="category-filter">
			<div className="category-filter__category-header">
				<h2>Categories</h2>
			</div>
			<div className="category-filter__category-card">
				<p onClick={() => filterByCategory()}>All</p>
				{categoriesContext.categories.map((c, index) => (
					<p onClick={() => filterByCategory(c.name)} key={index}>
						{c.name}
					</p>
				))}
			</div>
		</section>
	);
}
