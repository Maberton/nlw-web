import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import CreatePoint from './components/CreatePoint';

const Routes = () => {

  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={CreatePoint} path="/create-point" />
    </BrowserRouter>
  );
}

export default Routes;