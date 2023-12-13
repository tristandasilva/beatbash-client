import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';

const FestivalCard = ({ festival }) => {
  let genreString = '';
  festival.genres.forEach((genre, index) => {
    index == festival.genres.length - 1
      ? (genreString += genre)
      : (genreString += genre + ', ');
  });
  return (
    <div className='rounded-md overflow-hidden max-w-[280px] h-full'>
      <div>
        <img src={festival.images[0]} alt='Festival Image' className='w-full' />
      </div>
      <div className='py-3 px-5 bg-white'>
        <h4 className='font-semibold'>{festival.name}</h4>
        <div className='font-light text-sm'>
          {festival.city}, {festival.country}
        </div>
        {/* Rating Div */}
        <div className='flex items-center gap-3 mt-2'>
          <div className='flex'>
            {[...Array(5)].map((star, index) => {
              return <FaStar key={index} size={13} color='#FFB800'></FaStar>;
            })}
          </div>
          <p className='text-sm'>({festival.reviews.length} Reviews)</p>
        </div>
        {/* Rating Div End */}
        <div className='text-xs genre mt-4'>{genreString}</div>
      </div>
    </div>
  );
};

export default FestivalCard;
