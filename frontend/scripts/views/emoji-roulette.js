import React from 'react'
export default class EmojiRoulette extends React.Component {
	render() {
		const emoji = this.props.current || this.props.default
		console.log(emoji);
		return <div className='EmojiRoulette'>
			<div className={ 'EmojiRoulette_Emoji' + (emoji ? (' ' + emoji) : '') }/>
		</div>
	}
}
