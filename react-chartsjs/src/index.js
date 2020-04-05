import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page_2 from './Page_2';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/page2" component={Page_2} />
      </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));
