import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Home from './views/home'
import PageTwo from './views/pageTwo'

export default (
	<Switch>
		<Route exact path="/" render={(props) => <Home {...props} />} />
		<Route exact path="/page-two" render={(props) => <PageTwo {...props} />} />
	</Switch>
)
