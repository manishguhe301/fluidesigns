import React from 'react';
import SideBar from './SideBar';
import Dashboard from './Dashboard';

const Root = () => {
  return (
    <div className='font-inter bg-[#F8FAFC] flex items-start gap-6'>      {' '}
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default Root;
