'use client';
import { NAV_MENU } from '@/constants/constants';
import Image from 'next/image';
import React, { useState } from 'react';
import Help from './icons-as-components/Help';
import Logout from './icons-as-components/Logout';
import useMediaQuery from '@/hooks/useMediaQuery';

const SideBar = () => {
  const [activeItem, setActiveItem] = useState(NAV_MENU[0].menuItem);
  const isTablet = useMediaQuery('(max-width: 769px)');

  return (
    <div
      className={`h-screen w-1/6 bg-white flex flex-col justify-between py-[22px] px-4 max-md:px-2 fixed max-[769px]:h-full`}
    >
      <div className='flex flex-col'>
        {!isTablet ? (
          <Image src='/logo.svg' width={180} height={66} alt='logo' />
        ) : (
          <Image src='/logo-no-text.svg' width={180} height={66} alt='logo' />
        )}
        <div
          className='flex flex-col items-start my-6 w-full 
        '
        >
          {NAV_MENU.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.menuItem;
            return (
              <div
                key={item.menuItem}
                className={`p-4 flex gap-[10px] text-sm cursor-pointer w-full ${
                  isTablet ? 'gap-0 justify-center' : ''
                }   ${
                  isActive
                    ? 'bg-[#0F172A] rounded-md font-medium text-white transition-all duration-300 '
                    : 'text-[#0F172A]'
                }`}
                onClick={() => setActiveItem(item.menuItem)}
              >
                <IconComponent
                  color={isActive ? '#FFFFFF' : '#0F172A'}
                  strokeWidth={isActive ? 1.5 : 1}
                />{' '}
                <span className={isTablet ? 'hidden' : ''}>
                  {item.menuItem}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${isTablet && 'flex flex-col items-center justify-center'}`}
      >
        <p className='text-sm font-normal text-black text-opacity-[80%] flex items-center gap-[10px] py-3 cursor-pointer'>
          <Help />
          <span className={`${isTablet && 'hidden'}`}>Help</span>
        </p>
        <p className='text-sm font-normal text-black text-opacity-[80%] flex items-center gap-[10px] py-3 cursor-pointer'>
          <Logout />
          <span className={`${isTablet && 'hidden'}`}>Logout</span>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
