import React from 'react';

export const DashboardLayout = ({ header, sidebar, content }) => (
  <div id="dashboard-layout">
	{header}
	<div className="row">
	  <div className="col m3 l3">{sidebar}</div>
	  <div className="col m9 l9">{content}</div>
	</div>
  </div>
)

