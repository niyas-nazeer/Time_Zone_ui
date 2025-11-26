import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = ({banner}) => {
  return (

    <div className='banner-container'>
        <img className='banner' src={banner} alt="Banner" />
    </div>

  );
};

export default Banner;
