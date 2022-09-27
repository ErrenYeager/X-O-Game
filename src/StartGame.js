import React from "react";
import starterGif from "./startergif.webp";
import { Link } from "react-router-dom";

class StartGame extends React.Component {
  renderGameRules = () => {
    return (
      <ol>
        <li>The game is played on a grid that's 3 squares by 3 squares.</li>
        <li>
          You are X, your friend (or the computer in this case) is O. Players
          take turns putting their marks in empty squares.
        </li>
        <li>
          The first player to get 3 of her marks in a row (up, down, across, or
          diagonally) is the winner.
        </li>
        <li>When all 9 squares are full, the game is over.</li>
      </ol>
    );
  };

  render() {
    return (
      <div className="center-box start-page">
        <div className="game-rules">{this.renderGameRules()}</div>
        <img className="s-gif" src={starterGif} alt="X-O Gif" />
        <Link className="starter" to="/game">
          Start game!
        </Link>
      </div>
    );
  }
}

export default StartGame;
