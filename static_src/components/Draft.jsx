import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import Card from "./Card";

export default class Draft extends React.Component {
	constructor(props) {
		super(props);
		this.state = { draftedCards: this.props.draftedCards };
	};

	static propTypes={
		draftedCards:PropTypes.array.isRequired,
	};

	state = {
		draftedCards:' ',
	};


	render(){
			const { fromDraft, remove  } = this.props;
			const draftedElements = this.props.draftedCards.map((item) => {
				return <Card 
				key={item.cardId+(Math.floor(Math.random()*1000)) }
				id={item.cardId }
				text={ item.text }
				className={"draftedcard"}
				remove={this.props.remove}
				fromDraft={ this.props.fromDraft }
				/>
			});
	
		return(
			<div className="draftedCards">
					{draftedElements}
			</div>
			);
	}
}