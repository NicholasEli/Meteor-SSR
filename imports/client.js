import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { onPageLoad } from 'meteor/server-render'
import routes from './routes.js'

const fetchedData = window.__INITIAL_STATE__
delete window.__INITIAL_STATE__

const App = (props) => {
	return (
		<BrowserRouter>
			<Switch>{renderRoutes(routes, fetchedData)}</Switch>
		</BrowserRouter>
	)
}

onPageLoad(() => {
	ReactDOM.hydrate(<App />, document.getElementById('app'))
})
