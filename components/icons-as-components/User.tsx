import React from 'react';

const User = ({
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
        d='M13.3346 17.9395V16.2728C13.3346 15.3888 12.9834 14.5409 12.3583 13.9158C11.7332 13.2907 10.8854 12.9395 10.0013 12.9395H5.0013C4.11725 12.9395 3.2694 13.2907 2.64428 13.9158C2.01916 14.5409 1.66797 15.3888 1.66797 16.2728V17.9395'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5013 9.60618C9.34225 9.60618 10.8346 8.1138 10.8346 6.27285C10.8346 4.4319 9.34225 2.93951 7.5013 2.93951C5.66035 2.93951 4.16797 4.4319 4.16797 6.27285C4.16797 8.1138 5.66035 9.60618 7.5013 9.60618Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.8346 11.2728C16.7551 11.2728 17.5013 10.5267 17.5013 9.60618C17.5013 8.68571 16.7551 7.93951 15.8346 7.93951C14.9142 7.93951 14.168 8.68571 14.168 9.60618C14.168 10.5267 14.9142 11.2728 15.8346 11.2728Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.832 7.10602V7.93935'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.832 11.273V12.1063'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.9984 8.35602L17.2734 8.77268'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.393 10.4395L13.668 10.8562'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.9984 10.8562L17.2734 10.4395'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.393 8.77268L13.668 8.35602'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default User;
