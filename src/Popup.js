import React from "react";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <p className="message">{this.props.message}</p>
        <div className="popup-buttons">
          <button
            onClick={(event) => this.props.negativeHandler(event)}
            className="popup-button negative"
          >
            {this.props.negativeLabel}
          </button>
          <button
            onClick={(event) => this.props.possitiveHandler(event)}
            className="popup-button possitive"
          >
            {this.props.possitiveLabel}
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
