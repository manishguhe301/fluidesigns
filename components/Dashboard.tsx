import React from 'react';
import UserInfo from './UserInfo';
import LogsTable from './LogsTable';
import CalendarAndHolidays from './CalendarAndHolidays';

const Dashboard = () => {
  return (
    <div className='py-6 px-6 max-md:pr-4 flex flex-col w-full gap-6 ml-[16.66%] max-sm:px-2'>
      <UserInfo />
      <div className='flex items-start justify-between gap-6 max-md:flex-col w-full'>
        <LogsTable />
        <CalendarAndHolidays/>
      </div>
    </div>
  );
};

export default Dashboard;
