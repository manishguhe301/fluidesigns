import React from 'react';

const Building = ({
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
        d='M14.9987 2.10602H4.9987C4.07822 2.10602 3.33203 2.85221 3.33203 3.77268V17.106C3.33203 18.0265 4.07822 18.7727 4.9987 18.7727H14.9987C15.9192 18.7727 16.6654 18.0265 16.6654 17.106V3.77268C16.6654 2.85221 15.9192 2.10602 14.9987 2.10602Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 18.7728V15.4395H12.5V18.7728'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66797 5.43951H6.6763'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.332 5.43951H13.3404'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 5.43951H10.0083'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 8.77286H10.0083'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 12.1062H10.0083'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.332 8.77301H13.3404'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.332 12.106H13.3404'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66797 8.77301H6.6763'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66797 12.106H6.6763'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Building;
