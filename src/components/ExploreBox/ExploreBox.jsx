import React, { Component } from "react";
import ExploreCard from "../ExploreCard/ExploreCard";

import "./ExploreBox.scss";

class ExploreBox extends Component {
  render() {
    return (
      <div className="ExploreBox">
        <div className="ExploreContainer">
          <h3>Explore novos lugares...</h3>
          <div className="cardsBox">
            <ExploreCard
              title="Conheça novas playlists"
              image="bird"
              color="red"
            />
            <ExploreCard title="Acorde com música" image="sun" color="green" />
            <ExploreCard
              title="Últimos lançamentos"
              image="ghost"
              color="yellow"
            />
            <ExploreCard
              title="Músicas para viajar"
              image="airplane"
              color="purple"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ExploreBox;
