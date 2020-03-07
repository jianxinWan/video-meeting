import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '@/pages/home/index'
import Login from '@/pages/login/index';
import Register from '@/pages/register/index';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </HashRouter>
  )
}

export default Router;