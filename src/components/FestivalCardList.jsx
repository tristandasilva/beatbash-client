import React, { Component } from 'react';
import FestivalCard from './FestivalCard';

const FestivalCardList = ({ festivals }) => {
  return (
    <div className='flex flex-col md:flex-row overflow-auto justify-center h-full gap-5 px-3 md:px-0'>
      {festivals.map((festival) => (
        <FestivalCard key={festival.festivalId} festival={festival} />
      ))}
    </div>
  );
};

export default FestivalCardList;
