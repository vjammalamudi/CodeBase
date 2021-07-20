
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom';

import store from './store';
import {Provider} from 'react-redux';
const app=(
   <Provider store={store} ><Router><App /></Router></Provider>
);

ReactDOM.render(app, document.getElementById('app'));
