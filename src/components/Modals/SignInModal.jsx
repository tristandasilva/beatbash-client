import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const SignInModal = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => alert('Hello, ' + userCredential.user.email))
      .catch((err) => console.log(err));
  };

  modal
    ? document.body.classList.add('active-modal')
    : document.body.classList.remove('active-modal');

  return (
    <>
      <Button
        type='button'
        className='bg-[#36235F] border-[1px] border-[#D2F38C] text-[#D2F38C] w-28 rounded'
        onClick={toggleModal}
      >
        Sign In
      </Button>
      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content-container'>
            <div className='modal-content'>
              <form
                onSubmit={signIn}
                className='authForm flex flex-col w-full gap-5'
              >
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
                <Button type='submit'>Log In</Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInModal;
