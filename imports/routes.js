import Home from './views/home'
import PageTwo from './views/pageTwo'

export default [
	{
		name: 'Home',
		path: '/',
		exact: true,
		component: Home
	},
	{
		name: 'PageTwo',
		path: '/page-two',
		exact: true,
		component: PageTwo
	}
]
