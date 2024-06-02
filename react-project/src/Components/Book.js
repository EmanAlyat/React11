import React from 'react';
import './styles/Book/Book.css';

const Book = ({image, title, author, reviewedBy, titleColor="black", detailsColor="grey" }) => (

  <div className="book-card">
    <img src={image} alt={title} className="book-image" />
    <div className="book-details">
      <h3 className="book-title" style={{ color: titleColor }}>{title}</h3>
      <p className="book-author" style={{ color: detailsColor }}>By {author}</p>
      <p className="book-reviewedBy"style={{ color: detailsColor }}>Reviewed by: {reviewedBy}</p>
    </div>
  </div>
);

export default Book;
