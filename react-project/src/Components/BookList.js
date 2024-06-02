import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Book from "./Book";
import "./styles/BookList/BookList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <span className="nextArrow" onClick={onClick}>
      <i className="fa fa-chevron-right"></i>
    </span>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <span className="prevArrow" onClick={onClick}>
      <i className="fa fa-chevron-left"></i>
    </span>
  );
}
function BookList(props) {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    fetch(props.dataPath)
      .then((response) => response.json())
      .then((data) => setBooks(data.books))
      .catch((error) => console.error("Error fetching books:", error));
  }, [props.dataPath]);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow className="prevArrow" />,
    nextArrow: <SampleNextArrow className="nextArrow" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let id = props.id;
  id = id%2;
  return (
    <div className="main-container" style={props.backgroundStyle}>
      <div className="title" style={{ color: id === 1 ? "black" :  "white" }}>{props.title}</div>
      <Slider {...settings} className="book-list">
        {books.map((book) =>
          id === 1 ? 
            <Book
              key={id}
              image={book.image}
              title={book.title}
              author={book.author}
              reviewedBy={book.reviewedBy}
            />
           : 
            <Book
              key={id}
              image={book.image}
              title={book.title}
              author={book.author}
              reviewedBy={book.reviewedBy}
              titleColor="White"
              detailsColor="rgb(44, 125, 44)"
            />
        
        )}
      </Slider>
    </div>
  );
}

BookList.defaultProps = {
  backgroundStyle: {
    backgroundColor: "rgb(240, 240, 240)", 
  },
};

export default BookList;
