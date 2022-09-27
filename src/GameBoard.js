import React from "react";

class GameBoard extends React.Component {
  renderplain = () => {
    const buttons = [];
    let label = null;
    for (let i = 1; i < 10; i++) {
      if (this.props.x.includes(i.toString())) {
        label = "X";
      } else if (this.props.o.includes(i.toString())) {
        label = "O";
      }
      buttons.push(
        <button
          key={i}
          id={i}
          className="house"
          onClick={(event) => this.props.buttonClickHandler(event)}
        >
          {label}
        </button>
      );
      label = null;
    }
    return buttons;
  };

  render() {
    return (
      <div>
        <button className="button" onClick={() => this.props.restartHandler()}>
          RESTART
        </button>
        <div className="center-box game-grid">{this.renderplain()}</div>
        <h1>{this.props.checkWinner()}</h1>
      </div>
    );
  }
}

export default GameBoard;
