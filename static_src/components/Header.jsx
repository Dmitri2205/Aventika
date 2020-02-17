import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";





export default class Header extends React.Component {

static propTypes={
count:PropTypes.array.isRequired,
}

render(){
	return (
	<div className="header">	
	<h2>React app for Aventika</h2>
	<span>{ this.props.count.length}</span>
	</div>
	)
  }
}