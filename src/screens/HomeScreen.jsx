import React, { Component, useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import line from '../assets/line.svg';
import FestivalCardList from '../components/FestivalCardList.jsx';
import axios from 'axios';

const HomeScreen = () => {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/festivals').then((res) => {
      setFestivals(res.data);
    });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center mt-14 gap-16'>
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
