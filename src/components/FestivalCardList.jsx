import React, { Component } from 'react';
import FestivalCard from './FestivalCard';

const FestivalCardList = ({ festivals }) => {
  return (
    <div className='customScrollbar flex flex-col lg:flex-row overflow-auto justify-start gap-5 mx-3 md:mx-16 pb-12'>
      {festivals.map((festival) => (
        <FestivalCard key={festival.festivalId} festival={festival} />
      ))}
    </div>
  );
};

export default FestivalCardList;
