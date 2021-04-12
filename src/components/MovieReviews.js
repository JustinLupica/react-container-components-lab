// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {
  return (
    <ul className="review-list">
      <h2>Movie Reviews NY Times!</h2>
      {props.reviews.map((review, index) => (
        <li key={index} className="review">
          <h1>{review.display_title}</h1>
          <h2>{review.headline}</h2>
          <h2>{review.summary_short}</h2>
        </li>
      ))}
    </ul>
  );
};

MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;