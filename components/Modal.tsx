import React from 'react';
import { DialogHeader, DialogTitle } from './ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { DatePicker } from './DatePicker';
import { RadioButtons } from './RadioGroup';
import Image from 'next/image';
import { DialogTrigger } from '@radix-ui/react-dialog';

const ModalContent = () => {
  return (
    <div>
      <DialogHeader className='pb-10'>
        <DialogTitle className='font-inter text-2xl font-medium leading-4'>
          Apply Leave
        </DialogTitle>
      </DialogHeader>
      <div className='flex flex-row items-start justify-between gap-28 max-md:flex-col max-md:gap-8'>
        <div className='w-full'>
          <form className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='font-inter text-[#0F172A] text-base font-medium '>
                Leave Type<sup>*</sup>
              </label>
              <Select>
                <SelectTrigger className='w-full border border-[#CBD5E1] rounded-md'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='default'>Select Leave</SelectItem>
                  <SelectItem value='light'>Casual</SelectItem>
                  <SelectItem value='dark'>Sick</SelectItem>
                  <SelectItem value='system'>Maternity</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-inter text-[#0F172A] text-base font-medium '>
                Start Date<sup>*</sup>
              </label>
              <DatePicker />
            </div>
            <div className='flex flex-col gap-2 -mt-2'>
              <RadioButtons />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-inter text-[#0F172A] text-base font-medium '>
                End Date<sup>*</sup>
              </label>
              <DatePicker />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-inter text-[#0F172A] text-base font-medium '>
                Reason<sup>*</sup>
              </label>
              <textarea
                className=' border border-[#CBD5E1] rounded-md w-full h-[120px] resize-none outline-none p-2 text-[#0F172A] font-normal text-sm font-inter'
                placeholder='Type here'
              />
            </div>
            <div className='flex flex-row gap-2 text-[#3786F1] font-normal font-inter text-sm'>
              <Image src='/upload.svg' alt='upload' width={20} height={20} />
              <p>Upload Document</p>
            </div>
          </form>
        </div>
        <div className='w-full'>
          <div className='w-full border border-[#CBD5E1] p-4 rounded-md'>
            <p className='font-medium text-base text-[#0F172A] font-inter pb-4'>
              Available Leaves (Yearly)
            </p>
            <hr className=' bg-[#CBD5E1]' />
            <div className='flex flex-col gap-4 py-4'>
              <div className='flex justify-between items-center'>
                <p className=' text-[#1E293B] font-normal text-xs font-inter'>
                  Casual Leave
                </p>
                <p className='text-[#1E293B] font-medium font-inter text-sm'>
                  12
                </p>
              </div>
              <div className='flex justify-between items-center'>
                <p className=' text-[#1E293B] font-normal text-xs font-inter'>
                  Sick Leave
                </p>
                <p className='text-[#1E293B] font-medium font-inter text-sm'>
                  12
                </p>
              </div>
              <div className='flex justify-between items-center'>
                <p className=' text-[#1E293B] font-normal text-xs font-inter'>
                  LOP
                </p>
                <p className='text-[#1E293B] font-medium font-inter text-sm'>
                  --
                </p>
              </div>
            </div>
          </div>
          <p className='flex flex-row items-center gap-1 text-[10px] text-[#1E293B] font-inter font-normal py-3'>
            <Image src='/info.svg' alt='info' width={12} height={12} />
            Pending and approved leaves can be edited within 7 days
          </p>
        </div>
      </div>
      <div className='pt-8 flex items-center justify-end gap-2'>
        <DialogTrigger className='py-2 px-4 border border-[#E2E8F0] rounded-md font-inter text-[#0F172A] font-semibold text-base'>
          Cancel
        </DialogTrigger>
        <DialogTrigger className='bg-[#0F172A] rounded-md py-2 px-4 font-inter text-white font-semibold text-base'>
          Apply Leave
        </DialogTrigger>
      </div>
    </div>
  );
};

export default ModalContent;
