import React, { Component } from 'react';
import FestivalCard from './FestivalCard';

const FestivalCardList = ({ festivals }) => {
  return (
    <div className='customScrollbar flex flex-col md:flex-row overflow-auto justify-start h-full gap-5 mx-16 pb-12'>
      {festivals.map((festival) => (
        <FestivalCard key={festival.festivalId} festival={festival} />
      ))}
    </div>
  );
};

export default FestivalCardList;
