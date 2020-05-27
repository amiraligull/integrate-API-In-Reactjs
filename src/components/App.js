/** @format */
import React, { Component } from "react";
import unsplashapi from "../api/unsplashapi";
import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

export default class App extends Component {
  state = {
    images: [],
  };
  onSearchSubmit = (term) => {
    unsplashapi
      .get("search/photos", {
        params: {
          query: term,
        },
      })
      .then((Response) => {
        // console.log(Response.data.results);
        this.setState({ images: Response.data.results });
      });
  };
  render() {
    return (
      <div>
        <div className="ui container">
          <Searchbar onSubmit={this.onSearchSubmit} />
          <h1>total Images {this.state.images.length} </h1>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}
