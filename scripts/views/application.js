import React from 'react'
import { connect } from 'react-redux'

import { fetchInsults } from '../actions/insults'

export default class Application extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchInsults())
	}

	render() {
		return <div className="Application">
			{ this.props.children }
		</div>
	}
}

function mapStateToProps(storeState, ownProps) {
	const { insults } = storeState	

	return {
		insults
	}
}

export default connect(mapStateToProps)(Application)
