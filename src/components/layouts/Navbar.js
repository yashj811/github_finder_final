import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-danger">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
              <i className="fab fa-github" /> {this.props.title}
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
