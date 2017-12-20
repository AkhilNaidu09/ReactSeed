import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import { withRouter, Router } from 'react-router-dom'

it('header rendering', () => {
const div = document.createElement('div')
ReactDOM.render(withRouter(Header), div)
});


