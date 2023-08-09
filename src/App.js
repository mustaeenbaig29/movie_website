import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Search from './components/search/Search';
import Navbar from './components/Navbar/Navbar';
import ErrorPage from './components/Error__page/ErrorPage';
import About_us from './components/about_us/About_us';
import contact from './components/contact_us/contact';
import Movies from './components/movies/Movies';

const App = () => {
  return (
    <div>
    <Router>
      <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About_us} />
      <Route exact path="/contact" component={contact} />
      <Route exact path="/movies" component={Movies} />
      <Route path="/search/:query" component={Search} />
      <Route exact path="/*" component={ErrorPage} />
    </Switch>
  </Router>
    </div>
  )
}

export default App
