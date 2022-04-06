import React, { Component } from "react";
import Header from "./Header";
import DisplayList from "./DisplayList";
import JSON from "./car.json";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: JSON,
      serachcar: JSON,
    };
  }

  //search function
  serachcar = (search) => {
    let output = this.state.cars.filter((data) => {
      return data.Name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    this.setState({ serachcar: output });
  };

  render() {
    return (
      <>
        <Header
          searchInput={(searchData) => {
            this.serachcar(searchData);
          }}
        />
        <DisplayList carData={this.state.serachcar} />
      </>
    );
  }
}

export default SearchPage;
