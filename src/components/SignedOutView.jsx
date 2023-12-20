import React, { useState } from 'react';
import SignInModal from './Modals/SignInModal';
import SignUpModal from './Modals/SignUpModal';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const SignedOutView = () => {
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
    <div className='flex flex-col mt-4 sm:mt-0 gap-2'>
      <SignInModal />
      <SignUpModal text={'Sign Up'}>
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
      </SignUpModal>
    </div>
  );
};

export default SignedOutView;
