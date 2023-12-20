import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../api/axiosConfig.js';
import FestivalCardDetailed from '../components/FestivalCardDetailed.jsx';
import Review from '../components/Review';
import logo from '../assets/logo.png';
import { Label, Textarea, Button } from 'flowbite-react';
import { FaStar } from 'react-icons/fa';
import AuthDetails from '../components/AuthDetails.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';
import SignUpModal from '../components/Modals/SignUpModal.jsx';
import SignedInView from '../components/SignedInView.jsx';
import SignedOutView from '../components/SignedOutView.jsx';

const FestivalReviewScreen = () => {
  const { festivalId } = useParams();
  const [festival, setFestival] = useState({});
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    getSingleFestival(festivalId);
  }, []);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        axios
          .get(
            'https://vast-shore-06153-20fca160e608.herokuapp.com/api/v1/users/' +
              user.uid
          )
          .then((res) => {
            setAuthUser(res.data);
          });
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  const postReview = (e) => {
    e.preventDefault();
    let reviewText = document.getElementById('comment');
    axios
      .post('/api/v1/reviews', {
        body: reviewText.value,
        festivalId: festivalId,
        userId: auth.currentUser.uid,
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
    <div className='w-[90%] m-auto flex flex-col items-center md:items-stretch gap-6 md:gap-12 lg:mt-10 '>
      <div className='flex flex-col sm:flex-row gap-3 justify-between items-center'>
        <Link className='max-w-[310px] md:max-w-[300px]' to={'/'}>
          <img src={logo}></img>
        </Link>
        {authUser ? <SignedInView user={authUser} /> : <></>}
      </div>
      <div className='flex flex-col lg:flex-row items-start justify-between gap-8'>
        <FestivalCardDetailed festival={festival} />
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
              className='rounded mb-6'
            />
            {/* Rating Div */}
            {/* <div className='flex mt-4 gap-1'>
              {[...Array(5)].map((star, index) => {
                return <FaStar key={index} size={18} color='#D4CCCC'></FaStar>;
              })}
            </div> */}
            {/* Rating Div End */}
            {authUser ? (
              <Button
                type='submit'
                onClick={postReview}
                className='bg-[#D2F38C] text-[#5E5C62] px-12 rounded'
              >
                Submit
              </Button>
            ) : (
              <SignUpModal text={'Log in / Sign Up'} />
            )}
          </form>
          <div className='customScrollbar reviews mt-10 max-h-[300px] overflow-auto mb-10'>
            {festival.reviews &&
              festival.reviews.map((review) => <Review review={review} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalReviewScreen;
