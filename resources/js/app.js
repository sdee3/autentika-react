/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

const Home = lazy(() => import('./pages/home'));
const Contact = lazy(() => import('./components/Contact'));
const Questionnaire = lazy(() => import('./pages/questionnaire'));
const Blog = lazy(() => import('./pages/blog'));
const Article = lazy(() => import('./pages/blog/Article'));
const AddArticle = lazy(() => import('./pages/blog/AddArticle'));
const Edit = lazy(() => import('./pages/blog/Edit'));
const Page404 = lazy(() => import('./pages/404'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));

const CategoriesContext = React.createContext();

const App = () => {
	const [categories, setCategories] = React.useState([]);

	React.useEffect(() => {
		axios
			.get('/api/categories')
			.then(res => setCategories(res.data))
			.catch(err => console.error(err.response.data));
	}, []);

	return (
		<Router>
			<Suspense fallback="Loading...">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/export-intelligence-questionnaire"
						component={Questionnaire}
					/>
					<CategoriesContext.Provider value={categories}>
						<Route exact path="/blog" component={Blog} />
						<Route exact path="/blog/new" component={AddArticle} />
						<Route exact path="/blog/:slug" component={Article} />
						<Route exact path="/blog/:slug/edit" component={Edit} />
					</CategoriesContext.Provider>
					<Route component={Page404} />
				</Switch>
				<Contact />
				<Footer />
			</Suspense>
		</Router>
	);
};

if (document.getElementById('app')) {
	ReactDOM.render(<App />, document.getElementById('app'));
}

export { CategoriesContext };
