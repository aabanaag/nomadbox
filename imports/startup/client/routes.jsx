import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '../../ui/layouts/main.jsx';
import { DashboardLayout } from '../../ui/layouts/dashboard.jsx';

import Header from '../../ui/components/Header.jsx';
import CategoryList from '../../modules/dashboard/components/categories/CategoryList.jsx';
import JobList from '../../modules/dashboard/components/jobs/JobList.jsx';

FlowRouter.route('/', {
  name: 'index',
  action() {
	mount(DashboardLayout, {
	  header: <Header />,
	  sidebar: <CategoryList />,
	  content: <JobList />
	});
  }
})
