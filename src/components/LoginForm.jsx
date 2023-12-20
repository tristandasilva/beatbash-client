import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Button } from 'flowbite-react';

const LoginForm = ({ redirectBack, hidden }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Sign in successful');
        if (redirectBack) {
          history.back();
        }
      })
      .catch((err) => alert(err.code));
  };

  return (
    <div hidden={hidden}>
      <form
        onSubmit={signIn}
        className='authForm flex flex-col w-full gap-7 pb-8'
      >
        <div className='flex flex-col gap-2 text-gray-200 text-sm'>
          <label>Enter your email:</label>
          <input
            type='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className='flex flex-col gap-2 text-gray-200 text-sm'>
          <label>Enter your password:</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <Button
          type='submit'
          onClick={signIn}
          className='bg-[#D2F38C] border-[1px] text-[#36235F] font-semibold w-28 rounded self-center mt-5'
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
