import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import line from '../assets/line.svg';
import FestivalCardList from '../components/FestivalCardList.jsx';
import axios from '../api/axiosConfig.js';
import SignInModal from '../components/Modals/SignInModal.jsx';
import SignUpModal from '../components/Modals/SignUpModal.jsx';
import { auth } from '../firebase.js';
import { signOut } from 'firebase/auth';
import { Button } from 'flowbite-react';
import AuthDetails from '../components/AuthDetails.jsx';

const HomeScreen = () => {
  const [festivals, setFestivals] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('/api/v1/festivals').then((res) => {
      setFestivals(res.data);
    });
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-3 float-right -ml-[200px] mr-[64px]'>
        <AuthDetails></AuthDetails>
        <SignInModal />
        <SignUpModal />
        <Button
          onClick={() => {
            signOut(auth).then(() => {
              console.log('sign out done');
            });
          }}
        >
          Sign out
        </Button>
      </div>
      <div className='flex flex-col justify-center items-center gap-10 sm:gap-16'>
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
    </div>
  );
};

export default HomeScreen;
