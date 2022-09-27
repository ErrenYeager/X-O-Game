import React from "react";
import GameBoard from "./GameBoard";
import Popup from "./Popup";

class Game extends React.Component {
  state = { character: "x", xHouses: [], oHouses: [] };
  chosenOnes = new Set();
  winSituations = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ];

  buttonClickHandler = (event) => {
    const clickedId = event.target.getAttribute("id");
    if (this.chosenOnes.has(clickedId) || this.state.gameStatus) {
      return;
    }
    let currentXHouses = this.state.xHouses;
    let currentOHouses = this.state.oHouses;

    if (this.state.character === "x") {
      this.chosenOnes.add(clickedId);
      currentXHouses.push(clickedId.toString());
      this.setState({ xHouses: currentXHouses, character: "o" });
    } else if (this.state.character === "o") {
      this.chosenOnes.add(clickedId);
      currentOHouses.push(clickedId.toString());
      this.setState({ oHouses: currentOHouses, character: "x" });
    }
  };

  restartHandler = () => {
    this.setState({ character: "x", xHouses: [], oHouses: [] });
    this.chosenOnes.clear();
  };

  goToStart = () => {
    window.history.pushState({}, "", "/");
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  createPopup(popupMessage, nLabel, plabel) {
    return (
      <Popup
        message={popupMessage}
        negativeLabel={nLabel}
        possitiveLabel={plabel}
        possitiveHandler={this.restartHandler}
        negativeHandler={this.goToStart}
      />
    );
  }

  checkWinner = () => {
    if (this.state.oHouses.length + this.state.xHouses.length === 9) {
      return this.createPopup("DRAW! Restart Game?", "Game rules", "Yes");
    }
    for (const winCon of this.winSituations) {
      if (winCon.every((elem) => this.state.xHouses.includes(elem))) {
        return this.createPopup(
          "'X' Won the match! Restart Game?",
          "Game rules",
          "Yes"
        );
      }
      if (winCon.every((elem) => this.state.oHouses.includes(elem))) {
        return this.createPopup(
          "'X' Won the match! Restart Game?",
          "Game rules",
          "Yes"
        );
      }
    }
  };

  render() {
    return (
      <div>
        <GameBoard
          x={this.state.xHouses}
          o={this.state.oHouses}
          buttonClickHandler={this.buttonClickHandler}
          restartHandler={this.restartHandler}
          checkWinner={this.checkWinner}
        />
      </div>
    );
  }
}

export default Game;
