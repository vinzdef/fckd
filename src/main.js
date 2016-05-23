import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import DevTools from './scripts/dev/dev-tools'

import configureStore from './scripts/configure-store'

import Application from './scripts/views/application'

import './styles/main.scss'

ReactDOM.render (
	<Provider store={ configureStore() }>
		<div style={ {height: '100%'} }>
			<DevTools/>
			<Router history={ browserHistory }>
				<Route path="/" component={ Application }>
				</Route>
			</Router>
		</div>
	</Provider>
, document.querySelector('#Root'))
