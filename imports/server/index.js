import { onPageLoad } from 'meteor/server-render'
import { Promise } from 'meteor/promise'
import React from 'react'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
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
		const req = sink.request

		const data = await dataCollection.find().fetch()

		const App = (props) => (
			<StaticRouter location={props.location} context={{}}>
				{renderRoutes(routes, { data: data })}
			</StaticRouter>
		)

		sink.renderIntoElementById(
			'app',
			renderToString(<App location={req.url} />)
		)

		const helmet = Helmet.renderStatic()

		sink.appendToHead(`
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify({ data: data })};
      </script>
    `)
	}
})
