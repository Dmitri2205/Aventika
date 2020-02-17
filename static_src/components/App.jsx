import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import AddCard from './AddCard';
import Draft from './Draft';
import style from '../styles/style.css';
import CardsField from './CardsField';

export default class App extends React.Component {

state={
	draftedCards:[],
	savedCards:[],
	input:' ',

};


toDraft = (value) => {
	console.log(value);
	const {draftedCards} = this.state;
	if (value === " ") {
		return alert("Вы ничего не ввели");
	}else{
  this.setState({
           draftedCards:[...draftedCards, {cardId:draftedCards.length+value, text: value}],
       });
	}

};


toSave = (value) => {
	console.log(value);
	const {savedCards} = this.state;
		if (value === " ") {
		return alert("Вы ничего не ввели");
	}else{
  	this.setState({
           savedCards:[...savedCards, { cardId:savedCards.length+value, text: value}],
       });
  }
};
fromSave = (id, text) => {
	const {draftedCards, savedCards } = this.state;
	const f = savedCards.filter(function(item) {
		return item.cardId != id});
		this.setState((state) => {
			return {savedCards: f , draftedCards:[...draftedCards,{cardId:id, text:text}] } ;
				});
};

fromDraft = (id, text) => {
	const {draftedCards, savedCards } = this.state;
	const f = draftedCards.filter(function(item) {
		return item.cardId != id});
		this.setState((state) => {
			return {draftedCards: f , savedCards:[...savedCards,{cardId:id, text:text}] } ;
				});
};
remove = (cardId)=>{
	const { draftedCards } = this.state;
	const f = draftedCards.filter(function(item) {
		return item.cardId != cardId});
this.setState((state) => {
	return { draftedCards: f };
	});
}




	render(){
		return( 
	<div className="App">
		<Header count={this.state.savedCards}/>
			<div className="layout">
				<div className="leftcolumn">	
					<AddCard 
						input={this.state.input}
						toDraft={ this.toDraft }
						toSave={ this.toSave }
						draftedCards={ this.state.draftedCards}
						savedCards={this.state.savedCards}
						/>
					<Draft 
						remove={this.remove}
						fromDraft={ this.fromDraft }
						draftedCards={ this.state.draftedCards}
						/>
				</div>
					<CardsField 
						savedCards={this.state.savedCards}
						fromSave={ this.fromSave }
					/>
			</div>
	</div>
		)
		}
}