// BrandCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BrandCard.css';

const BrandCard = ({ logo, link }) => {
  return (
    <Link to={link} className="brand-card">
      {logo && <img src={logo} alt="Brand logo" />}
    </Link>
  );
};

export default BrandCard;
