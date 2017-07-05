import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../actions/index';

class Username extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value}, 
			() => this.props.fetchUser(this.state.term)
		);
	}

	render(){
		return(
			<div className="username">
				<span className="username-text">Username:</span>
				<input value = {this.state.term}
			   	onChange={this.onInputChange}	/>
			</div>
		)	
	}
}

export default connect(null, {fetchUser})(Username);
