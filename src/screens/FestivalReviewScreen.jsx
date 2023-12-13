import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FestivalCardLarge from '../components/FestivalCardLarge';

const FestivalReviewScreen = () => {
  const { festivalId } = useParams();
  const [festival, setFestival] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/v1/festivals/' + festivalId)
      .then((res) => {
        setFestival(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <FestivalCardLarge festival={festival} />
    </>
  );
};

export default FestivalReviewScreen;
