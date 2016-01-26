import fetch from 'isomorphic-fetch'
import ACTIONS from './actions'

export function fetchInsults() {
	return (dispatch, getState) => {
		fetch('data/insults.json')
			.then(response => response.json)
			.then(json => {
				dispatch(receivedInsults(json))
			})
	}
}

export function receivedInsults(json) {
	return {
		type: ACTIONS.INSULTS.RECEIVED,
		insults: json
	}
}
