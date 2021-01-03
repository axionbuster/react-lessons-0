import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import People from './People';
import Person from './Person';
import Error from './Error';
import Navbar from './Navbar';

// React Router is a third-party extension to React.
// Download it here:
// npm install [-S] react-router-dom
// [For React Native: react-router-native]

const RouterExample = () => (
  // when you navigate to about or people, you'll also see path, because
  // both routes (/) and (/*) match. To prevent it, use the "exact" prop, or,
  // use the Switch construct.
  <Router>
    <Navbar />
    <Switch>
      {/* Switch means only the first matching is displayed. */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/people">
        <People />
      </Route>
      {/* Whatever is passed to the right of "/person/"
       will be matched into 'id' (as a string). */}
      <Route path="/person/:id">
        <Person />
      </Route>
      <Route path="*">
        {/* a star means it will always match */}
        <Error />
      </Route>
    </Switch>
  </Router>
);

export default RouterExample;
