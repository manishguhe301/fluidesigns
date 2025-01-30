import React from 'react';

const Attendance = ({
  color = '#0F172A',
  strokeWidth = 1,
}: {
  color?: string;
  strokeWidth?: number;
}) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.33203 5.4395H17.4987'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.33203 10.4395H17.4987'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.33203 15.4395H17.4987'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 5.4395L3.33333 6.27284L5 4.60617'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 10.4395L3.33333 11.2728L5 9.60617'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 15.4395L3.33333 16.2728L5 14.6062'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Attendance;
