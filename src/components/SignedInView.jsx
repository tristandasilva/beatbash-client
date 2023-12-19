import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const SignedInView = ({ user }) => {
  const [modal, setModal] = useState(false);

  modal
    ? document.body.classList.add('active-modal')
    : document.body.classList.remove('active-modal');

  return (
    <div className='flex flex-col items-end gap-2'>
      <p className='font-light text-white'>Hello, {user.firstName}</p>
      <button
        className='font-semibold text-[#6EA100] hover:underline'
        onClick={() => {
          signOut(auth).then(() => {
            console.log('sign out done');
          });
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default SignedInView;
