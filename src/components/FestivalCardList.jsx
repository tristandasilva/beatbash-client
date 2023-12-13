import React, { Component } from 'react';
import FestivalCard from './FestivalCard';

const FestivalCardList = ({ festivals }) => {
  return (
    <div className='flex h-full gap-5'>
      {festivals.map((festival) => (
        <FestivalCard key={festival.festivalId} festival={festival} />
      ))}
    </div>
  );
};

export default FestivalCardList;
