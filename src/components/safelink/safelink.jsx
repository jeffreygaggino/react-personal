import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SafeLink extends Component {
  onClick(event) {
    if (this.props.to === this.props.history.location.pathname) {
      event.preventDefault();
    }

    // Ensure that if we passed another onClick method as props, it will be called too
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { children, onClick, ...other } = this.props;
    return (
      <Link onClick={this.onClick.bind(this)} {...other}>
        {children}
      </Link>
    );
  }
}

export default withRouter(SafeLink);
