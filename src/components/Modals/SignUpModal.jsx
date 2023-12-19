import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';

const SignUpModal = ({ text }) => {
  const [modal, setModal] = useState(false);
  const [hide, setHide] = useState(true);

  const toggleModal = () => {
    setHide(true);
    setModal(!modal);
  };

  modal
    ? document.body.classList.add('active-modal')
    : document.body.classList.remove('active-modal');

  return (
    <>
      <Button
        type='button'
        className='bg-[#36235F] border-[1px] border-[#D2F38C] text-[#D2F38C] px-8 sm:px-0 rounded'
        onClick={toggleModal}
      >
        {text}
      </Button>
      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content-container sm:mt-0'>
            <div id='modalDiv' className='modal-content'>
              <SignUpForm id='signUpForm' hidden={!hide} />
              <LoginForm redirectBack={false} hidden={hide} />
              {hide ? (
                <button
                  className='mt-12 -ml-7 text-sm text-gray-400 hover:underline'
                  onClick={() => {
                    setHide(false);
                  }}
                >
                  Already have an account? Login.
                </button>
              ) : (
                <button
                  className='mt-12 -ml-7 text-sm text-gray-400 hover:underline'
                  onClick={() => {
                    setHide(true);
                  }}
                >
                  Not signed up yet?
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpModal;
