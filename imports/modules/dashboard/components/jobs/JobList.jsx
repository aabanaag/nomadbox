import React, { Component } from 'react';
import Job from './Job.jsx';

export default class JobList extends Component {
  constructor() {
  	super();
  }
  componentDidMount() {
  	$('.collapsible').collapsible({
	  accordion: false
	});
  }
  render() {
	return (
	  <div id="job-list">
		<h3>Latest Remote Jobs</h3>
		<ul className="collapsible" data-collapsible="expandable">
		  <Job jobName="Javascript Developer" jobDesc="Full Stack Javascript Developer" />
		</ul>
	  </div>
	)
  }
}
