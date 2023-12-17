import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../api/axiosConfig.js';
import FestivalCardLarge from '../components/FestivalCardLarge';
import Review from '../components/Review';
import logo from '../assets/logo.png';
import { Label, Textarea, Button } from 'flowbite-react';
import { FaStar } from 'react-icons/fa';

const FestivalReviewScreen = () => {
  const { festivalId } = useParams();
  const [festival, setFestival] = useState({});

  useEffect(() => {
    getSingleFestival(festivalId);
  }, []);

  const postReview = (e) => {
    e.preventDefault();
    let reviewText = document.getElementById('comment');
    axios
      .post('/api/v1/reviews', {
        body: reviewText.value,
        festivalId: festivalId,
      })
      .then((res) => {
        getSingleFestival(festivalId);
        reviewText.value = '';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSingleFestival = (festivalId) => {
    axios
      .get('/api/v1/festivals/' + festivalId)
      .then((res) => {
        setFestival(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='w-[90%] m-auto flex flex-col gap-12'>
      <Link className='max-w-[250px]' to={'/'}>
        <img src={logo}></img>
      </Link>
      <div className='flex flex-col lg:flex-row items-start justify-between gap-8'>
        <FestivalCardLarge festival={festival} />
        <div className='w-full -mt-2'>
          <form>
            <div className='mb-2 block'>
              <Label
                htmlFor='comment'
                value='Have something to say?'
                className='text-white'
              />
            </div>
            <Textarea
              id='comment'
              placeholder='Leave a comment...'
              required
              rows={6}
              className='rounded'
            />
            {/* Rating Div */}
            {/* <div className='flex mt-4 gap-1'>
              {[...Array(5)].map((star, index) => {
                return <FaStar key={index} size={18} color='#D4CCCC'></FaStar>;
              })}
            </div> */}
            {/* Rating Div End */}
            <Button
              type='submit'
              onClick={postReview}
              className='bg-[#D2F38C] text-[#5E5C62] mt-6 px-12 rounded'
            >
              Submit
            </Button>
          </form>
          <div className='reviews mt-10 max-h-[350px] overflow-auto'>
            {festival.reviews &&
              festival.reviews.map((review) => <Review review={review} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalReviewScreen;
