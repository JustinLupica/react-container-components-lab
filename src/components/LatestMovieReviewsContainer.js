import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "ZGtORdiXNuHYmL1m3zHvVchYGGF9F58c";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  getReview = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((movieReviews) => this.setState({ reviews: movieReviews.results }));
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <button onClick={this.getReview}>Get all reviews from NY Times!</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
