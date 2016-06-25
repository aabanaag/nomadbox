import React, { Component } from 'react';

export default class Job extends Component {
  constructor() {
  	super();
  }
  render() {
	return (
	  <li>
		<div className="collapsible-header">{this.props.jobName}</div>
		<div className="collapsible-body">
		  <p>{this.props.jobDesc}</p>
		</div>
	  </li>
	)
  }
}
