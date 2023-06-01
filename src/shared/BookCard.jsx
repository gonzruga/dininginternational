import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./book-card.css";
const BookCard = ({ book }) => {
  const { id, city, title, photo, featured } = book;

  return (
    <div className="book_card">
      <Card>
        <div className="book_img">
          <img src={photo} alt="book-img" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card_top d-flex align-items-lg-center justify-content-between">
            <span className="book_location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i>
              {city}
            </span>
          </div>
          <h5 className="book_title">
            <Link to={`/books/${id}`}>{title}</Link>
          </h5>
          <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <button className="btn booking_btn">
              <Link to={`/books/${id}`}>Create Event</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BookCard;
