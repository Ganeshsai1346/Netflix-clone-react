/** @format */

import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import { SpinnerRoundOutlined } from "spinners-react";

class MovieGalleryTwo extends Component {
  state = {
    movies: [],
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchMovies();
  };
  fetchMovies = async () => {
    try {
      const url = "http://www.omdbapi.com/?apikey=3c00fe98&s=twilight";

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
        <h1 className="text-center text-white">Twilight Movies</h1>
        <Row className="justify-content-center mt-3">
          {this.state.isLoading && (
            <SpinnerRoundOutlined
              size={61}
              thickness={161}
              speed={94}
              color="rgba(172, 57, 57, 1)"
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

export default MovieGalleryTwo;
