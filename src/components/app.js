import React, { Component } from "react";
import GamesList from "./GamesList";
// const games = undefined;
import Login from "./login";

export default class App extends Component {
  render() {
    return (
      // <div className="container">
      //   <div className="ui clearing segment" />
      //   <GamesList games={games} />
      // </div>
      <div>
        <Login />
      </div>
    );
  }
}
