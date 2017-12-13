import React from 'react';
import {
    render
} from 'react-dom';
import './index.css';
import App from './components/App';
import RoutesHandler from './components/route';

render( <RoutesHandler / > , document.getElementById('root'))