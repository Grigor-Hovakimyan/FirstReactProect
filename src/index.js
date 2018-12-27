// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS

import App from './components/App';

// STYLES

import 'normalize.css';
import './styles/app.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('app'));