import React from 'react';
import RenderDOM from 'react-dom';
import SavedCard from './SavedCard';
import PropTypes from "prop-types";

export default class CardsField extends React.Component{
static propTypes ={
	savedCards:PropTypes.array.isRequired,
	fromSave:PropTypes.func.isRequired,
}

render(){
	const {savedCards, fromSave} = this.props;
	const savedElements = this.props.savedCards.map( (index) => {
				return <SavedCard
				key={ index.cardId + (Math.floor(Math.random()*1000))}
				id={ index.cardId } 
				text={ index.text }
				className="savedcard"
				fromSave={fromSave}
				/>
			});
	
	return(
		<div className="cardsfield">
		{savedElements}
		</div>
	)
  }
}