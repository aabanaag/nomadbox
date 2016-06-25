import React from 'react';

export const MainLayout = ({ header, content, footer }) => (
  <div id="main-layout">
	{header}
	<div className="container">{content}</div>
	{footer}
  </div>
)
