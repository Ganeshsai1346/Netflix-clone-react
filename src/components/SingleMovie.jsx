/** @format */

import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleMovie extends Component {
  render() {
    return (
      <Card id="card" style={{ height: "460px" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src={this.props.movie.Poster}
        />
        <Card.Body>
          <Card.Title className="card-title text-center">
            {this.props.movie.Title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleMovie;
