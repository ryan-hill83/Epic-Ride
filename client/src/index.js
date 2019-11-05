import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import reducer from './store/reducer'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import Main from './components/Main'
import Checkout from './components/Checkout'

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store = {store}>
<BrowserRouter>
<App>
<Switch>
<Route exact path="/" component = {Main}/>
<Route path="/checkout" component = {Checkout}/>
</Switch>    
</App>
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
