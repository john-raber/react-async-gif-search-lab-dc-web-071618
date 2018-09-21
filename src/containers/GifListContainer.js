import React, { Component } from "react";

import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      gifs: []
    };
  }

  getGifs = () => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${
        this.state.search
      }&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then(r => r.json())
      .then(json =>
        this.setState({
          gifs: json.data
        })
      );
  };

  updateSearch = term => {
    this.setState({
      search: term
    });
  };

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch
          handleChange={this.updateSearch}
          handleSubmit={this.getGifs}
        />
      </div>
    );
  }
}

export default GifListContainer;
