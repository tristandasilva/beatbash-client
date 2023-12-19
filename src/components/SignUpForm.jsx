import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import axios from '../api/axiosConfig';

const SignUpForm = ({ hidden }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    if (password == confirmedPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user.uid);
          axios.post('/api/v1/users', {
            uid: userCredential.user.uid,
            firstName: firstName,
            lastName: lastName,
            email: userCredential.user.email,
          });
          alert('User created');
        })
        .catch((err) => alert(err));
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div hidden={hidden}>
      <form className='authForm flex flex-col gap-5'>
        <input
          type='text'
          placeholder='First name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='Last name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type='email'
          placeholder='Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type='password'
          placeholder='Confirm password'
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        ></input>
        <Button
          type='button'
          onClick={signUp}
          className='bg-[#D2F38C] border-[1px] text-[#36235F] font-semibold px-5 rounded self-center mt-5'
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
