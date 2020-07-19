//Hook



import React from 'react';
import ReactDOM from 'react-dom';



export default class Card extends React.Component{
	constructor(props) {
		super(props);
		this.state = {cardId:this.props.id , text:this.props.text};
	}
	state={
		cardId:' ',
		text:' ',
}

render(){
		return(
	<div className={this.props.className}>
					<p>{ this.state.text }</p>
		<div className="cardbuttons">
				<button className="remove"
					onClick={()=>{this.props.remove(this.state.cardId)}}>
						Remove
					</button>
				<button className="save"
					onClick={ () => {this.props.fromDraft(this.state.cardId, this.state.text)}}>
						Save
				</button>
			</div>
	</div>
	)
  }
}
