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
      .then((userCredential) => alert('Successfully signed in'))
      .catch((err) => alert(err.code));
  };

  modal
    ? document.body.classList.add('active-modal')
    : document.body.classList.remove('active-modal');

  return (
    <>
      <Button
        type='button'
        className='bg-[#36235F] border-[1px] border-[#D2F38C] text-[#D2F38C] rounded'
        onClick={toggleModal}
      >
        Log In
      </Button>
      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content-container sm:mt-0'>
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
                <Button
                  type='submit'
                  onClick={signIn}
                  className='bg-[#D2F38C] border-[1px] text-[#36235F] font-semibold w-28 rounded self-center mt-5'
                >
                  Log In
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInModal;
