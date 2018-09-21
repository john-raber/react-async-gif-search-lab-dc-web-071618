import React, { Component } from "react";

class GifSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h6>Enter a Search Term:</h6>
        <input
          onChange={event => this.props.handleChange(event.target.value)}
          placeholder="Search..."
        />
        <button onClick={() => this.props.handleSubmit()}>Find Gifs</button>
      </div>
    );
  }
}

export default GifSearch;
