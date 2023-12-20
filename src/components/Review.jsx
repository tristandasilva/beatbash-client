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
          {reviewer.firstName && reviewer.lastName ? (
            <>
              <p className='text-[#ffffff] text-sm font-light'>
                {reviewer.firstName + ' ' + reviewer.lastName[0] + '.'}
              </p>
            </>
          ) : (
            <></>
          )}
          <p className='text-white text-sm font-light'></p>
          <div className='flex gap-1'>
            {/* {[...Array(5)].map((star, index) => {
            return <FaStar key={index} size={13} color='#FFB800'></FaStar>;
          })} */}
          </div>
        </div>
        <p className='text-[#a9a9a9] mt-2 text-sm font-light'>{review.body}</p>
      </div>
    )
  );
};

export default Review;
