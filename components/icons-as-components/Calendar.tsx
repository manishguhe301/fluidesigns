import React from 'react';

const Calendar = ({
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
        d='M17.5 6.68949V5.43949C17.5 4.99747 17.3244 4.57354 17.0118 4.26098C16.6993 3.94842 16.2754 3.77283 15.8333 3.77283H4.16667C3.72464 3.77283 3.30072 3.94842 2.98816 4.26098C2.67559 4.57354 2.5 4.99747 2.5 5.43949V17.1062C2.5 17.5482 2.67559 17.9721 2.98816 18.2847C3.30072 18.5972 3.72464 18.7728 4.16667 18.7728H7.08333'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.332 2.10602V5.43935'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66797 2.10602V5.43935'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 8.77283H6.66667'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.582 15.0227L13.332 13.981V12.106'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.332 13.773C18.332 15.0991 17.8052 16.3709 16.8676 17.3085C15.9299 18.2462 14.6581 18.773 13.332 18.773C12.0059 18.773 10.7342 18.2462 9.7965 17.3085C8.85882 16.3709 8.33203 15.0991 8.33203 13.773C8.33203 12.4469 8.85882 11.1752 9.7965 10.2375C10.7342 9.29979 12.0059 8.77301 13.332 8.77301C14.6581 8.77301 15.9299 9.29979 16.8676 10.2375C17.8052 11.1752 18.332 12.4469 18.332 13.773Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Calendar;
