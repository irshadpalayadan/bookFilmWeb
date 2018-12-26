import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/dashboard';
import { Route} from 'react-router'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter>
<div>
    <Route exact path="/" component={Home}/>
    <Route path="/dashboard" component={Dashboard}/>
    </div>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
