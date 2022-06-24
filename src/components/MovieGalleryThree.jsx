/** @format */

import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import { SpinnerDiamond } from "spinners-react";

class MovieGalleryThree extends Component {
  state = {
    movies: [],
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchMovies();
  };
  fetchMovies = async () => {
    try {
      const url = "http://www.omdbapi.com/?apikey=3c00fe98&s=avengers";

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
    }
  };
  render() {
    return (
      <Container>
        <h1 className="text-center text-white">Avengers Movies</h1>
        <Row className="justify-content-center mt-3">
          {this.state.isLoading && (
            <SpinnerDiamond
              size={61}
              thickness={161}
              speed={94}
              color="rgba(172, 57, 57, 1)"
              secondaryColor="rgba(57, 172, 160, 0.44)"
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

export default MovieGalleryThree;
