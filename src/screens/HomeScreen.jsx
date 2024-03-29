import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import line from '../assets/line.svg';
import FestivalCardList from '../components/FestivalCardList.jsx';
import axios from '../api/axiosConfig.js';
import AuthDetails from '../components/AuthDetails.jsx';
import { Dropdown } from 'flowbite-react';
import { auth } from '../firebase.js';
import SignedInView from '../components/SignedInView.jsx';

const HomeScreen = () => {
  const [festivals, setFestivals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/v1/festivals').then((res) => {
      setFestivals(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {/* <div className='sm:hidden float-right -ml-16 mt-5'>
        <Dropdown
          className='w-full h-full flex flex-col items-end bg-transparent'
          label=''
          dismissOnClick={false}
        >
          <AuthDetails></AuthDetails>
        </Dropdown>
      </div> */}
      {/* <div className='sm:hidden w-full flex justify-center mb-8'>
        <AuthDetails></AuthDetails>
      </div> */}
      <div className='flex flex-col gap-3 float-right -ml-[200px] mr-[64px]'>
        <div className='hidden sm:flex'>
          <AuthDetails></AuthDetails>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-10 sm:gap-16 xl:mt-[4%]'>
        <div className='flex flex-col items-center gap-3'>
          {/* <div className='sm:hidden'>
            {user ? <SignedInView user={user} /> : <></>}
          </div> */}

          <div className='max-w-xs'>
            <img src={logo}></img>
          </div>
          <img src={line} className='max-w-[150px]'></img>
          <p className='text-white text-lg font-normal tracking-[8px] uppercase mt-4'>
            Review The Ryhthm
          </p>
        </div>
        {isLoading && <div className='min-w-[90vw] h-full'></div>}
        <FestivalCardList festivals={festivals} />
      </div>
    </div>
  );
};

export default HomeScreen;
