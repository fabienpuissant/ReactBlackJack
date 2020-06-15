import React, { Component } from 'react'

export class Card extends Component {

	render() {

		return (
			<>
				<img alt="CardImage" src={this.props.image} />
			</>
		)
	}
}

export default Card



