import React from 'react';
import './FeatureImage.css'; // You can skip this if using inline styles

const FeatureImage = ({ src, alt = '', height = '' }) => {
  return (
    <div className="feature-image" style={{ height }}>
      <img src="assets/feature-image/feature-image.png" />
    </div>
  );
};

export default FeatureImage;
