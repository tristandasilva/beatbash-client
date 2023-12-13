import React, { Component, useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import line from '../assets/line.svg';
import FestivalCard from '../components/FestivalCard';
import axios from 'axios';

const HomeScreen = () => {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/festivals').then((res) => {
      setFestivals(res.data);
    });
  }, []);

  return (
    <div className='flex flex-col justify-center mt-14 gap-16'>
      <div className='flex flex-col items-center gap-3'>
        <div className='max-w-xs'>
          <img src={logo}></img>
        </div>
        <img src={line} className='max-w-[150px]'></img>
        <p className='text-white text-lg font-normal tracking-[8px] uppercase mt-4'>
          Review The Ryhthm
        </p>
      </div>
      <div className='flex gap-5'>
        {festivals.map((festival) => (
          <FestivalCard key={festival.festivalId} festival={festival} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
