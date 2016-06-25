import React, { Component } from 'react';
import Category from './Category.jsx';

export default class CategoryList extends Component {
  constructor() {
	super();
  }
  render() {
	return (
	  <div id="category-list" className="collection">
	  	<Category categoryName="Development" badgeNumber="5" />
		<Category categoryName="Design" badgeNumber="10" />
	  </div>
	)
  }
}
