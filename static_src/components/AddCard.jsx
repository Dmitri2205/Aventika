import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";


export default class  AddCard extends React.Component{
	constructor(props){
	super(props);
	this.state = {input:this.props.input}
};
static propTypes={
	toDraft:PropTypes.func.isRequired,
	toSave:PropTypes.func.isRequired,
};
state = {
input:' ',
};

handleChange = (event) => {
	this.setState({input:event.target.value,
	});
};
inputUpdate


	render(){
		return(
			<div className="addCard">
				<input className="addcard_input" 
				onChange={ this.handleChange }
				/>
			<br/>
				<div className="addButtons">
					<button className="draftButton" 
						onClick=
						{ ()=>{this.props.toDraft(this.state.input)}}

					>Draft
					</button>
					<button className="saveButton" 
					onClick={ ()=>{this.props.toSave(this.state.input)} }
					>Save
					</button>
				</div>
			</div>
		)
    }
}