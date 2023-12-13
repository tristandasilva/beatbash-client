import React, { Component } from 'react';

const FestivalCard = ({ festival }) => {
  return (
    <div className='rounded-md overflow-hidden'>
      <div className='max-w-[280px]'>
        <img src={festival.images[0]} alt='Festival Image' className='w-full' />
      </div>
      <div className='py-3 px-5 bg-white'>
        <h4 className='font-semibold'>{festival.name}</h4>
        <div className='font-light'>
          {festival.city}, {festival.country}
        </div>
      </div>
    </div>
  );
};

export default FestivalCard;
