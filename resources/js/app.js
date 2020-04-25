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

const Alert = lazy(() => import('./components/Alert'));
const Home = lazy(() => import('./pages/home'));
const AdminLogin = lazy(() => import('./pages/blog/admin'));
const Article = lazy(() => import('./pages/blog/Article'));
const AddArticle = lazy(() => import('./pages/blog/AddArticle'));
const Blog = lazy(() => import('./pages/blog'));
const Edit = lazy(() => import('./pages/blog/Edit'));
const Page404 = lazy(() => import('./pages/404'));
const Questionnaire = lazy(() => import('./pages/questionnaire'));
const Services = lazy(() => import('./pages/services'));
const ExportMarketIntel = lazy(() =>
  import('./pages/services/ExportMarketIntel')
);
const FindingBuyers = lazy(() => import('./pages/services/FindingBuyers'));
const ExportMarketStrategyDev = lazy(() =>
  import('./pages/services/ExportMarketStrategyDev')
);
const OrganisationalDev = lazy(() =>
  import('./pages/services/OrganisationalDev')
);
const TrainingExporters = lazy(() =>
  import('./pages/services/TrainingExporters')
);

const Navbar = lazy(() => import('./components/Navbar'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const CategoriesContext = React.createContext();
const AlertContext = React.createContext();

const App = () => {
  const [categories, setCategories] = React.useState([]);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertState, setAlertState] = React.useState('');

  React.useEffect(() => {
    axios
      .get('/api/categories')
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err.response));
  }, []);

  const setAlert = (message, state) => {
    setAlertMessage(message);
    setAlertState(state);

    setTimeout(() => {
      setAlertMessage('');
      setAlertState('');
    }, 2500);
  };

  const updateCategories = (categories) => setCategories(categories);

  return (
    <Router>
      <Suspense fallback='Loading...'>
        <AlertContext.Provider value={setAlert}>
          <Navbar />
          <Alert alertMessage={alertMessage} alertState={alertState} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/export-intelligence-questionnaire'
              component={Questionnaire}
            />
            <CategoriesContext.Provider
              value={{ categories, updateCategories }}
            >
              <Route exact path='/services' component={Services} />
              <Route
                exact
                path='/services/export-market-intelligence'
                component={ExportMarketIntel}
              />
              <Route
                exact
                path='/services/finding-buyers'
                component={FindingBuyers}
              />
              <Route
                exact
                path='/services/export-marketing-strategy-development'
                component={ExportMarketStrategyDev}
              />
              <Route
                exact
                path='/services/organisational-development'
                component={OrganisationalDev}
              />
              <Route
                exact
                path='/services/training-for-exporters'
                component={TrainingExporters}
              />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/blog/admin' component={AdminLogin} />
              <Route exact path='/blog/new' component={AddArticle} />
              <Route exact path='/blog/:slug' component={Article} />
              <Route exact path='/blog/:slug/edit' component={Edit} />
            </CategoriesContext.Provider>
            <Route component={Page404} />
          </Switch>
          <Contact />
          <Footer />
        </AlertContext.Provider>
      </Suspense>
    </Router>
  );
};

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}

export { AlertContext, CategoriesContext };
