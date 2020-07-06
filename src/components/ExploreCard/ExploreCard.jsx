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
      <div className={`ExploreCard ${this.state.color}`}>
        <h5>{this.state.title}</h5>
        <img src={this.state.image} />
      </div>
    );
  }
}

ExploreCard.defaultProps = {
  title: "Em breve novidades...",
  image: "../../assets/bird.svg",
  color: "red",
};

export default ExploreCard;
