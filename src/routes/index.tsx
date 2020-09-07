import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Library from '../pages/Library';
import ReadingPlan from '../pages/ReadingPlan';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/library" component={Library} />
      <Route path="/reading_plan" component={ReadingPlan} />
    </Switch>
  );
};

export default Routes;
