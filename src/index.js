import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Tops from './Pages/Tops/Tops.js';
import Bottoms from './Pages/Bottoms/Bottoms.js';
import Bras from './Pages/Bras/Bras.js';
import Cart from './Pages/Cart/Cart.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); */


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/tops" component={Tops} />
      <Route exact path="/bottoms" component={Bottoms} />
      <Route exact path="/bras" component={Bras} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>

  , document.getElementById('root'));
serviceWorker.unregister();
