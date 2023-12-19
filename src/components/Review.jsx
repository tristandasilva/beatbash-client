import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from '../api/axiosConfig';

const Review = ({ review }) => {
  const [reviewer, setReviewer] = useState({});

  useEffect(() => {
    axios.get('/api/v1/users/' + review.userId).then((res) => {
      setReviewer(res.data);
    });
  }, []);

  return (
    reviewer && (
      <div className='border-t border-[#ffffff25] py-5 mr-10'>
        <div className='flex gap-2 items-center'>
          <p className='text-white text-sm'>
            {reviewer.firstName + ' ' + reviewer.lastName}
          </p>
          <div className='flex gap-1'>
            {/* {[...Array(5)].map((star, index) => {
            return <FaStar key={index} size={13} color='#FFB800'></FaStar>;
          })} */}
          </div>
        </div>
        <p className='text-[#7E7E7E] mt-2 text-sm'>{review.body}</p>
      </div>
    )
  );
};

export default Review;
