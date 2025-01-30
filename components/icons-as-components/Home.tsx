import React from 'react';

const Home = ({
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
      viewBox='0 0 20 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.5 7.9395L10 2.10617L17.5 7.9395V17.1062C17.5 17.5482 17.3244 17.9721 17.0118 18.2847C16.6993 18.5972 16.2754 18.7728 15.8333 18.7728H4.16667C3.72464 18.7728 3.30072 18.5972 2.98816 18.2847C2.67559 17.9721 2.5 17.5482 2.5 17.1062V7.9395Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 18.7728V10.4395H12.5V18.7728'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Home;
