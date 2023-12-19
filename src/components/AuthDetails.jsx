import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import axios from 'axios';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

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
  return <div>{authUser ? <>Hello, {authUser.firstName}</> : <></>}</div>;
};

export default AuthDetails;
