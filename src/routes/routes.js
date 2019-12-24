import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from '../pages/list';


export default function Routes() {
  return (
      <Switch>
        <Route path="/" component={List} />
      </Switch>
  );
}