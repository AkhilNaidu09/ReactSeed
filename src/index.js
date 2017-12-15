import React from 'react';
import {
    render
} from 'react-dom';
import './index.css';
import App from './components/app/App';
import RoutesHandler from './components/route';

render( <RoutesHandler / > , document.getElementById('root'))