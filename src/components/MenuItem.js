import React from 'react';

const MenuItem = ({ image, title, description }) => (
  <div className="menu-item">
    <img src={image} alt={title} />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default MenuItem;