import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from 'flowbite-react';
import axios from '../../api/axiosConfig';

const SignUpModal = ({ text }) => {
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
        .catch((err) => alert(err.code));
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <>
      <Button
        type='button'
        className='bg-[#36235F] border-[1px] border-[#D2F38C] text-[#D2F38C] rounded'
        onClick={toggleModal}
      >
        {text}
      </Button>
      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content-container'>
            <div className='modal-content'>
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
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpModal;
