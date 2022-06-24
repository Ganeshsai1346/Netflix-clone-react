/** @format */

import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleMovie extends Component {
  render() {
    return (
      <Card id="card">
        <Card.Img
          className="card-img"
          variant="top"
          src={this.props.movie.Poster}
        />
        <Card.Body>
          <Card.Text className="card-title text-center mt-2">
            {this.props.movie.Title}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleMovie;
