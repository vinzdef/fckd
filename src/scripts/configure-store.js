import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddle from 'redux-thunk'

import DevTools from './dev/dev-tools'
import rootReducer from './reducers/root-reducer'

const finalCreateStore = compose(
	applyMiddleware(thunkMiddle),
	DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState)

	if (module.hot) {
	   module.hot.accept(
		   rootReducer,
		   () => store.replaceReducer()
   		)
	}

	 return store;
}
