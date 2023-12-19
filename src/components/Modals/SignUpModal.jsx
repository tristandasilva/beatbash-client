import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from 'flowbite-react';
import axios from '../../api/axiosConfig';

const SignUpModal = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };

  modal
    ? document.body.classList.add('active-modal')
    : document.body.classList.remove('active-modal');

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
    }
  };

  return (
    <>
      <Button
        type='button'
        className='bg-[#36235F] border-[1px] border-[#D2F38C] text-[#D2F38C] w-28 rounded'
        onClick={toggleModal}
      >
        Sign Up
      </Button>
      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content-container'>
            <div className='modal-content'>
              <form onSubmit={signUp} className='authForm flex flex-col gap-5'>
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
                <Button type='submit'>Sign Up</Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpModal;
