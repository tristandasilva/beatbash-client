import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import line from '../assets/line.svg';
import FestivalCardList from '../components/FestivalCardList.jsx';
import axios from '../api/axiosConfig.js';

const HomeScreen = () => {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/festivals').then((res) => {
      setFestivals(res.data);
    });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center gap-10 sm:gap-16 pb-5'>
      <div className='flex flex-col items-center gap-3'>
        <div className='max-w-xs'>
          <img src={logo}></img>
        </div>
        <img src={line} className='max-w-[150px]'></img>
        <p className='text-white text-lg font-normal tracking-[8px] uppercase mt-4'>
          Review The Ryhthm
        </p>
      </div>
      <FestivalCardList festivals={festivals} />
    </div>
  );
};

export default HomeScreen;
