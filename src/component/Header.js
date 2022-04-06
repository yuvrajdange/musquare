import React, { Component } from "react";
import "./searchPage.css";

class Header extends Component {
  handleChange = (event) => {
    this.props.searchInput(event.target.value);
  };

  render() {
    return (
      <>
        <div className="mainHeader">
          <input onChange={this.handleChange} placeholder="Search Here..." />
        </div>
      </>
    );
  }
}

export default Header;
