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
        <img
          src={require(`../../assets/${this.state.image}.svg`)}
          alt={`icon-${this.state.image}`}
        />
      </div>
    );
  }
}

ExploreCard.defaultProps = {
  title: "Em breve novidades...",
  image: "bird",
  color: "red",
};

export default ExploreCard;
