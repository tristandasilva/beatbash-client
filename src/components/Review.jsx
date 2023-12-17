import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
  return (
    <div className='border-t border-[#ffffff25] py-5 mr-10'>
      <div className='flex gap-2 items-center'>
        <p className='text-white text-sm'>
          {/* {review.firstName + ' ' + review.lastName[0] + '.'} */}
        </p>
        <div className='flex gap-1'>
          {/* {[...Array(5)].map((star, index) => {
            return <FaStar key={index} size={13} color='#FFB800'></FaStar>;
          })} */}
        </div>
      </div>
      <p className='text-[#7E7E7E] mt-2 text-sm'>{review.body}</p>
    </div>
  );
};

export default Review;
