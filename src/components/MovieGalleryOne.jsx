/** @format */

import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import { SpinnerInfinity } from "spinners-react";

class MovieGalleryOne extends Component {
  state = {
    movies: [],
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchMovies(this.props.moviesGenre);
  };
  fetchMovies = async (query) => {
    try {
      const url = `http://www.omdbapi.com/?apikey=3c00fe98&s=${query}`;

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();

        console.log(data);

        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      } else {
        alert("API ERROR!");
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };
  render() {
    return (
      <Container>
        <h1 className="text-center text-white">
          {this.props.movieTitle} Movies
        </h1>
        <Row className="justify-content-center mt-3">
          {this.state.isLoading && (
            <SpinnerInfinity
              size={75}
              thickness={157}
              speed={85}
              color="rgba(172, 84, 57, 1)"
              secondaryColor="rgba(114, 57, 172, 0.44)"
            />
          )}

          {this.state.movies &&
            this.state.movies.map((movie) => (
              <Col
                key={movie.imdbID}
                xs={6}
                sm={4}
                md={3}
                lg={3}
                className="mb-5">
                <SingleMovie movie={movie} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default MovieGalleryOne;
