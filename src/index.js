import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './styles/stylesheet.css';
import './utils/loader.js';
import './utils/cool-effect.js'
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
