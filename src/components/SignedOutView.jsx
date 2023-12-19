import React from 'react';
import SignInModal from './Modals/SignInModal';
import SignUpModal from './Modals/SignUpModal';

const SignedOutView = () => {
  return (
    <div className='flex flex-col gap-2'>
      <SignInModal />
      <SignUpModal text={'Sign Up'} />
    </div>
  );
};

export default SignedOutView;
