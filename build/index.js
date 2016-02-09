import './sass/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/weather.jsx';

ReactDOM.render(
    <App />,
    document.getElementById('container')
);