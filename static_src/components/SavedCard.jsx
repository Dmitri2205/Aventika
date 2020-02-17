import React from 'react';
import RenderDOM from 'react-dom';

export default class SavedCard extends React.Component{
constructor(props){
super(props);
this.state = {cardId:this.props.id};
};


	state={
		cartId:" ",
		marked:" ",

	};

	mark(mark){
		if (mark === true) {
			this.setState({marked:false})
		}else{
			this.setState({marked:true});
  	}
		
}

render(){
	const {text, fromSave} = this.props;
		return(
			<div className="card">
			<div className="head">
				<h1>{text}</h1>
				<span className="marker"
				style={ this.state.marked ? {backgroundColor :'#00FF8A'} : {backgroundColor:'#FF5A5A'}  }
				/>
			</div>
					<button className="savedButton"
					onClick={ ()=>{this.props.fromSave(this.state.cardId, text, this.state.marked)}}
					>Draft</button>
					<button className="savedButton"
					onClick={()=>{this.mark(this.state.marked)}}
					>Mark</button>
			</div>
		)
	}
}