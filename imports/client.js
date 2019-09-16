import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { onPageLoad } from 'meteor/server-render'
import routes from './routes.js'

const App = () => <BrowserRouter>{routes}</BrowserRouter>

onPageLoad(() => {
	ReactDOM.hydrate(<App />, document.getElementById('app'))
})
