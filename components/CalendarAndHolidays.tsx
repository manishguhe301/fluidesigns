'use client';
import React, { useState } from 'react';
import { Calendar } from './ui/calendar';

const CalendarAndHolidays = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className='w-full md:w-[30%] bg-white h-full flex flex-col items-center justify-center pb-20 max-md:flex-row max-md:pb-0 max-sm:flex-col max-sm:pb-10'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        showOutsideDays={true}
        className='h-full w-full  '
      />
      <div className='flex flex-col gap-10 w-full px-2 mt-10 h-full'>
        <div className='flex justify-between items-center'>
          <p className='font-medium text-[#0F172A] text-sm leading-4'>
            Upcoming Holidays
          </p>
          <p className='font-medium text-[#0F172A] text-[10px] leading-6'>
            View All
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-start mb-2'>
            <p className='text-[#0F172A] text-xs leading-6'>1 Jan, Mon 2025</p>
            <p className='text-[#64748B] text-xs leading-6'>New year’s Day </p>
          </div>
          <div className='flex justify-between items-start mb-2'>
            <p className='text-[#0F172A] text-xs leading-6'>1 Jan, Mon 2025</p>
            <p className='text-[#64748B] text-xs leading-6'>New year’s Day </p>
          </div>
          <div className='flex justify-between items-start mb-2'>
            <p className='text-[#0F172A] text-xs leading-6'>1 Jan, Mon 2025</p>
            <p className='text-[#64748B] text-xs leading-6'>New year’s Day </p>
          </div>
          <div className='flex justify-between items-start mb-2'>
            <p className='text-[#0F172A] text-xs leading-6'>1 Jan, Mon 2025</p>
            <p className='text-[#64748B] text-xs leading-6'>New year’s Day </p>
          </div>
          <div className='flex justify-between items-start mb-2'>
            <p className='text-[#0F172A] text-xs leading-6'>1 Jan, Mon 2025</p>
            <p className='text-[#64748B] text-xs leading-6'>New year’s Day </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarAndHolidays;
