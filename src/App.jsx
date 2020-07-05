import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Playlist from "./pages/Playlist";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/playlist">
            <Playlist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
