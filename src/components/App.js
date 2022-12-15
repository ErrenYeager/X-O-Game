import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Starter from "./Starter";

class App extends React.Component {
  negativeHandler = (event) => {};

  possitiveHandler = () => {};

  render() {
    return (
      <>
        <BrowserRouter>
          <Route path="/" exact component={Starter} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
