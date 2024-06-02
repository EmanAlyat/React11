import React from 'react';
import './styles/Category/Category.css';

const Category = ({ image, title, description }) => {
  return (
    <div className="category">      
      <img src={image} alt={title} className="category-image" />
      <div className="category-content">
        <h3 className="category-title">{title}</h3>
        <p className="category-description">{description}</p>
      </div>
    </div>
    
  );
}
export default Category;
