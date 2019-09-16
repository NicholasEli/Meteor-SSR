import { onPageLoad } from 'meteor/server-render'
import { Promise } from 'meteor/promise'
import React from 'react'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import { matchRoutes, renderRoutes } from 'react-router-config'

import routes from '../../imports/routes.js'

Meteor.publish('data', () => dataCollection.find())

Meteor.methods({
	addData: (data) => {
		dataCollection.insert({ text: data })
		return dataCollection.find().fetch()
	}
})

onPageLoad(async (sink) => {
	if (sink.arch === 'web.browser') {
		const url = sink.request.url
		const context = {}

		console.log(routes)

		const App = (props) => (
			<StaticRouter location={props.location} context={context}>
				{routes}
			</StaticRouter>
		)

		sink.renderIntoElementById(
			'app',
			renderToString(
				<App location={sink.request.url} things={{ hello: 'ni' }} />
			)
		)

		const helmet = Helmet.renderStatic()
	}
})
