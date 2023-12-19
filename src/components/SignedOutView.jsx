import React from 'react';
import SignInModal from './Modals/SignInModal';
import SignUpModal from './Modals/SignUpModal';

const SignedOutView = () => {
  return (
    <div className='flex sm:flex-col mt-4 sm:mt-0 gap-2'>
      <SignInModal />
      <SignUpModal text={'Sign Up'} />
    </div>
  );
};

export default SignedOutView;
