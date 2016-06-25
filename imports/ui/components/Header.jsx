import React, { Component } from 'react';

export default class Header extends Component {
  render() {
	return (
	  <nav>
		<div className="wrapper">
		  <a href="#" className="brand-logo">NomadBox</a>
		  <ul id="nav-mobile" className="right hide-on-med-and-down">
			<li><a href="#">Log-Out</a></li>
		  </ul>
		</div>
	  </nav>
	)
  }
}
