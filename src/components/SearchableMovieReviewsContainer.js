import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    let searchTerm = this.state.searchTerm;
    this.searchReviews(searchTerm);
  };

  searchReviews = (searchTerm = "Matrix") => {
    fetch(URL + `&query=${searchTerm}`)
      .then((response) => response.json())
      .then((reviews) =>
        this.setState({
          reviews: reviews.results,
        })
      );
  };

  render() {
    return (
      <div className="searchable-movie-reviews">

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit">Search Movie Review</button>
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;