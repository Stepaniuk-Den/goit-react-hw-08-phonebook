import React from 'react';
import { StyledHome } from './Home.styled';
import { selectUserData } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Home = () => {
  const userData = useSelector(selectUserData);
  return (
    <StyledHome>
      <div>
        <h1>Hello, dear {userData ? userData.name : 'customer'} !!</h1>
      </div>
    </StyledHome>
  );
};

export default Home;
