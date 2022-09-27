import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Game from "./Game";
import StartGame from "./StartGame";

class App extends React.Component {
  negativeHandler = (event) => {};

  possitiveHandler = () => {};

  render() {
    return (
      <>
        <BrowserRouter>
          <Route path="/" exact component={StartGame} />
          <Route path="/game" exact component={Game} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
