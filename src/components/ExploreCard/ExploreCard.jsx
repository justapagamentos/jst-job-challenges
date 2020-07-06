import React, { Component } from "react";

import "./ExploreCard.scss";

class ExploreCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      image: this.props.image,
      color: this.props.color,
    };
  }

  render() {
    return (
      <div className="ExploreCard">
        <h5>{this.state.title}</h5>
        <img src={this.state.image} width="200px" height="200px" />
      </div>
    );
  }
}

ExploreCard.defaultProps = {
  title: "Em breve novidades...",
  image: "a",
  color: "b",
};

export default ExploreCard;
