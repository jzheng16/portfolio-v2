import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home/Home';
import Tutoring from './components/Blogs/Tutoring/Tutoring';
// import Blog from './components/Blog/Blog';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/blog/tutoring">
        <Tutoring />
      </Route>
      {/* <Route exact path="/blog">
        <Blog />
      </Route> */}

    </Switch>
  );
}
