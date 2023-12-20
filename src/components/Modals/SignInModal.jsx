import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import LoginForm from '../LoginForm';

const SignInModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  modal
    ? document.body.classList.add('active-modal')
    : document.body.classList.remove('active-modal');

  return (
    <>
      <Button
        type='button'
        className='bg-[#36235F] hover:bg-[#2a1950] border-[1px] border-[#D2F38C] text-[#D2F38C] px-8 sm:px- rounded'
        onClick={toggleModal}
      >
        Log In
      </Button>
      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content-container sm:mt-0'>
            <div className='modal-content'>
              <LoginForm redirectBack={false} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInModal;
