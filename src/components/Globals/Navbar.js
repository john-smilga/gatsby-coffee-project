import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse"
  };
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar-collapse"
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show"
        });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link p-1 mx-2">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link p-1 mx-2">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link p-1 mx-2">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                to="#"
                className="nav-link snipcart-checkout cart-link p-1 mx-2"
              >
                <span class="snipcart-summary cart-total text-yellow">
                  <span>Cart Items : </span>
                  <span class="snipcart-total-items" />{" "}
                  <span>Cart Total : </span>
                  <span class="snipcart-total-price" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
