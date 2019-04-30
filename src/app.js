import React from 'react'
import { render } from 'react-dom'

import Card from './components/atoms/Card.jsx'

const renderApp = () => (
    <Card sentence='Hello, world' />
);

render(renderApp(), document.getElementById('app'));
