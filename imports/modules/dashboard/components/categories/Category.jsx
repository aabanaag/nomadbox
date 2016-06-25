import React, { Component } from 'react';

export default class Category extends Component {
  constructor() {
  	super();
  }
  render() {
	return (
	  <a href="#" className="collection-item">
		{this.props.categoryName}
		<span className="badge">{this.props.badgeNumber}</span>
	  </a>
	)
  }
}
