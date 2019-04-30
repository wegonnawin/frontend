import React from 'react'
import { render } from 'react-dom'

import Card from './components/atoms/card.js'

const renderApp = () => (
    <Card />
)

const root = document.getElementById('app')
render(renderApp(), root)
