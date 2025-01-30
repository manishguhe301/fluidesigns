'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const UserInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const isSmallDevice = windowWidth < 768;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='bg-[#fff] rounded-md  flex flex-col gap-7 max-md:gap-4 '>
      <div className='flex justify-between items-center py-8 px-[30px] max-md:p-4 max-sm:flex-col max-md:gap-4 max-md:w-full'>
        <div className='flex flex-row gap-4 items-center '>
          <Image src='/user.svg' width={70} height={70} alt='user' />
          <div className='flex flex-col gap-1'>
            <p className='font-medium text-[#0F172A] text-lg leading-6'>
              Dhavanshi Gada{' '}
            </p>
            <p className='text-[#64748B] text-sm font-normal leading-4'>
              dhavanshi@fluidesign.in
            </p>
          </div>
        </div>
        <button className='bg-[#0F172A] py-2 px-4 font-semibold text-white leading-6 rounded-md max-sm:w-full'>
          Selfie Clock In
        </button>
      </div>
      <div
        className='flex w-full md:hidden items-center justify-between px-4 py-2 '
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p>More Info about user</p>
        <Image src='/expand.svg' width={20} height={20} alt='expand' />
      </div>

      {(isExpanded || !isSmallDevice) && (
        <div className='flex items-center justify-evenly w-full border-t-[2px] border-[#F8FAFC] max-md:flex-col max-md:gap-4 max-md:w-full'>
          <div className='w-1/5 h-[120px] max-md:h-full max-sm:w-full border-r-[2px] border-[#F8FAFC] flex items-center justify-center gap-2 font-normal text-base max-md:text-sm tracking-[-2%] leading-5 max-md:py-2 max-md:gap-2'>
            <p>October</p>
            <Image src='/calendar.svg' width={20} height={20} alt='calendar' />
          </div>
          <div className='w-1/5 h-[120px] border-r-[2px] border-[#F8FAFC] flex flex-col justify-center gap-5 max-md:h-full max-md:w-full max-md:justify-center max-md:items-center max-md:border-[2px] max-md:py-2 max-md:gap-2'>
            <p className='text-base max-md:text-sm tracking-tight text-[#475569] font-normal leading-4'>
              Present Days
            </p>
            <p className='text-[#0F172A] text-xl max-md:text-lg font-medium leading-5'>
              15
            </p>
          </div>
          <div className='w-1/5 h-[120px] border-r-[2px] border-[#F8FAFC] flex flex-col justify-center gap-5 max-md:h-full max-md:w-full max-md:justify-center max-md:items-center max-md:border-[2px] max-md:py-2 max-md:gap-2'>
            <p className='text-base max-md:text-sm tracking-tight text-[#475569] font-normal leading-4'>
              Total Leave Balance
            </p>
            <p className='text-[#0F172A] text-xl max-md:text-lg font-medium leading-5'>
              02
            </p>
          </div>
          <div className='w-1/5 h-[120px] border-r-[2px] border-[#F8FAFC] flex flex-col justify-center gap-5 max-md:h-full max-md:w-full max-md:justify-center max-md:items-center max-md:border-[2px] max-md:py-2 max-md:gap-2'>
            <p className='text-base max-md:text-sm tracking-tight text-[#475569] font-normal leading-4'>
              Outstanding Anomalies
            </p>
            <p className='text-[#0F172A] text-xl max-md:text-lg font-medium leading-5'>
              03
            </p>
          </div>
          <div className='w-1/5 h-[120px] border-r-[2px] border-[#F8FAFC] flex flex-col justify-center gap-5 max-md:h-full max-md:w-full max-md:justify-center max-md:items-center max-md:border-[2px] max-md:py-2 max-md:gap-2'>
            <p className='text-base max-md:text-sm tracking-tight text-[#475569] font-normal leading-4'>
              Avg. Working hours
            </p>
            <p className='text-[#0F172A] text-xl max-md:text-lg font-medium leading-5'>
              9hrs 30min
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
