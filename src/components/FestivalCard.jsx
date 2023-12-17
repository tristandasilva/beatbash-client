import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const FestivalCard = ({ festival }) => {
  let genreString = '';
  festival.genres.forEach((genre, index) => {
    index == festival.genres.length - 1
      ? (genreString += genre)
      : (genreString += genre + ', ');
  });

  return (
    <div className='rounded-md overflow-auto flex-shrink-0 w-full lg:max-w-[280px] h-full'>
      <div>
        <img src={festival.images[0]} alt='Festival Image' className='w-full' />
      </div>
      <div className='py-3 px-5 bg-white'>
        <h4 className='font-semibold'>{festival.name}</h4>
        <div className='font-light text-sm'>
          {festival.city}, {festival.country}
        </div>
        {/* Rating Div */}
        <div className='flex items-center gap-3 mt-2'>
          {/* <div className='flex'>
            {[...Array(5)].map((star, index) => {
              return <FaStar key={index} size={13} color='#FFB800'></FaStar>;
            })}
          </div> */}
          <p className='text-sm text-[#787878]'>
            ({festival.reviews.length} Reviews)
          </p>
        </div>
        {/* Rating Div End */}
        <div className='text-xs genre mt-4'>{genreString}</div>
        <Link to={`/festivals/${festival.festivalId}`}>
          <button className='w-1/2 bg-[#81BE00] rounded px-4 py-2 mt-7 text-xs text-white'>
            See Reviews
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FestivalCard;
