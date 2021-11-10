import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Tutoring from './components/Blogs/Tutoring/Tutoring';
import Burnout from './components/Blogs/Burnout/Burnout';
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
      <Route exact path="/blog/how-to-avoid-burnout">
        <Burnout />
      </Route>
      {/* <Route exact path="/blog">
        <Blog />
      </Route> */}

    </Switch>
  );
}
