'use client';
import { LEAVE_TABLE_DATA, LEAVE_TABLE_DATA_TYPE } from '@/constants/constants';
import React from 'react';
import { Dialog, DialogTrigger, DialogContent } from './ui/dialog';
import ModalContent from './Modal';

const LogsTable = () => {
  return (
    <div className='w-[70%] bg-white h-full rounded max-md:w-full'>
      <div className='flex w-full items-center justify-center border-b-2 border-[#F8FAFC] '>
        <div className='w-[40%] flex items-center justify-center cursor-not-allowed text-[#475569] font-normal text-base py-4'>
          Attendance log{' '}
        </div>
        <div className='w-[40%] flex items-center justify-center text-[#0F172A] text-base font-medium border-b-[3px]  border-[#0F172A]  cursor-pointer py-4 '>
          Leave Log
        </div>
      </div>
      <div className='flex flex-col  mt-10 px-7 max-sm:overflow-x-scroll'>
        <div className='flex items-center justify-between mb-7'>
          <p className='text-[#0F172A] font-medium text-lg leading-5'>
            Leave Log
          </p>
          <Dialog>
            <DialogTrigger className='bg-white rounded-md border border-[#E2E8F0] px-4 py-2 font-medium leading-6'>
              Apply Leave
            </DialogTrigger>
            <DialogContent className='h-[90%] w-[60%] overflow-y-scroll max-sm:w-[90%] max-sm:h-[80%]'>
              <ModalContent />
            </DialogContent>
          </Dialog>
        </div>
        <table className='min-w-full table-auto border border-[#ECECEC] rounded-md max-sm:w-full '>
          <thead className='bg-transparent'>
            <tr>
              <th className='px-4 py-3 text-left text-[#0F172A] font-medium leading-4 text-sm'>
                Leave Type
              </th>
              <th className='px-4 py-3 text-left text-[#0F172A] font-medium leading-4 text-sm'>
                From
              </th>
              <th className='px-4 py-3 text-left text-[#0F172A] font-medium leading-4 text-sm'>
                To
              </th>
              <th className='px-4 py-3 text-left text-[#0F172A] font-medium leading-4 text-sm'>
                Reason
              </th>
              <th className='px-4 py-3 text-left text-[#0F172A] font-medium leading-4 text-sm'>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {LEAVE_TABLE_DATA.map((item: LEAVE_TABLE_DATA_TYPE, index) => {
              return (
                <tr
                  key={`${item.leaveType}-${index}`}
                  className='border border-[#ECECEC]'
                >
                  <td className='py-5 px-2 font-poppins font-medium text-sm text-[#0F172A]'>
                    {item.leaveType}
                  </td>
                  <td className='py-5 px-2  text-[#1D2433] text-sm font-normal leading-5'>
                    {item.from}
                  </td>
                  <td className='py-5 px-2  text-[#334155] text-sm font-normal leading-5'>
                    {item.to}
                  </td>
                  <td className='py-5 px-2  text-[#334155] text-sm font-normal leading-5'>
                    {item.reason}
                  </td>
                  <td
                    className={`py-5 px-2  ${
                      item.status === 'Approved'
                        ? 'text-[#34C759]'
                        : item.status === 'Rejected'
                        ? 'text-[#FF3B30]'
                        : 'text-[#007AFF]'
                    } text-sm font-normal leading-5`}
                  >
                    {item.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className='py-4 px-4 text-[#0F172A] underline cursor-pointer self-end'>
          View More
        </p>
      </div>
    </div>
  );
};

export default LogsTable;
