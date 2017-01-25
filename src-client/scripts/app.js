import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider} from 'react-redux';
import Home from './components/home'
import Login from "./components/Login"
console.log(Home)

const router = (
      <Router history={hashHistory}>
         <Route path='/' component={Home}>
         </Route>
         <Route path="/here" component={Login}></Route>

      </Router>
)

         render(router, document.getElementById('app-container'))
