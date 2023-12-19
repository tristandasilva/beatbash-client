import React from 'react';
import { FaStar } from 'react-icons/fa';

const FestivalCardDetailed = ({ festival }) => {
  if (!festival || !festival.reviews) {
    return <div>Loading...</div>;
  }
  let genreString = '';
  festival.genres.forEach((genre, index) => {
    index == festival.genres.length - 1
      ? (genreString += genre)
      : (genreString += genre + ', ');
  });

  return (
    <div className='rounded-md overflow-hidden max-w-full lg:max-w-[425px] h-full'>
      <div>
        <img src={festival.images[0]} alt='Festival Image' className='w-full' />
      </div>
      <div className='py-5 px-7 bg-white'>
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
        <p className='text-sm font-light my-4'>
          Lorem ipsum dolor sit amet consectetur. Nisl risus suspendisse vel
          viverra id aliquet semper. Adipiscing elementum pellentesque odio
          sollicitudin in enim nisl libero volutpat. Mattis integer in eget
          amet. Quis suspendisse nisl cursus tincidunt et.
        </p>
      </div>
    </div>
  );
};

export default FestivalCardDetailed;
