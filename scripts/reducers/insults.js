import ACTIONS from '../actions/actions'

export default function insultsReducer(state = [], action) {
	switch (action.type) {
		case ACTIONS.INSULTS.RECEIVE:
			return action.subjects
		default:
			return state
	}
}
