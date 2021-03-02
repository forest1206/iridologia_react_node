import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Flag from "react-flagkit";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { TranslateAction } from "../../../actions/translateAction";
import LangSelect from "./langSelect";

export class Navigation extends Component {
  state = {
    collapsed: true,
  };

  handleChange = (index) => {
    switch (index) {
      case 1:
        this.handleChangeLanguage("1");
        break;
      case 2:
        this.handleChangeLanguage("2");
        break;
      case 3:
        this.handleChangeLanguage("3");
        break;
      case 4:
        this.handleChangeLanguage("4");
        break;
      default:
        this.handleChangeLanguage("5");
        break;
    }
  };

  handleChangeLanguage = (flag) => {
    console.log("flag", flag);
    console.log("this.props", this.props);
    this.props.TranslateAction(flag);

    // return (dispatch) => {
    //   this.props.TranslateAction(flag);
    // };
  };

  renderToggler = () => {
    return (
      <button
        type="button"
        className="navbar-toggle collapsed"
        onClick={() => this.setState({ collapsed: !this.state.collapsed })}
      >
        {" "}
        <span className="sr-only">Toggle navigation</span>{" "}
        <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
        <span className="icon-bar"></span>{" "}
      </button>
    );
  };

  renderLangSelector = () => {
    return (
      <div className="lang-selector">
        <LangSelect onChange={(index) => this.handleChange(index)} />
        <div className="lang-selector-list">
          <IconButton onClick={(e) => this.handleChangeLanguage("1")}>
            <Flag country="US" />
          </IconButton>
          <IconButton onClick={(e) => this.handleChangeLanguage("2")}>
            <Flag country="FR" />
          </IconButton>
          <IconButton onClick={(e) => this.handleChangeLanguage("3")}>
            <Flag country="IT" />
          </IconButton>
          <IconButton onClick={(e) => this.handleChangeLanguage("4")}>
            <Flag country="PT" />
          </IconButton>
          <IconButton onClick={(e) => this.handleChangeLanguage("5")}>
            <Flag country="ES" />
          </IconButton>
        </div>
      </div>
    );
  };

  renderLogo = () => {
    return (
      <a href="/" className="app-logo">
        <img src="/eyelogo.png" alt="eyelogo" />
      </a>
    );
  };

  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            {this.renderLogo()}
            {this.renderLangSelector()}
            {this.renderToggler()}
          </div>
          <div
            className={`navbar-collapse ${
              this.state.collapsed === true ? "collapse " : ""
            }`}
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavHashLink to="#about" className="page-scroll">
                  {this.props.data ? this.props.data.about : "loading..."}
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to="#portfolio" className="page-scroll">
                  {this.props.data ? this.props.data.gallery : "loading..."}
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to="#buy-space" className="page-scroll">
                  Buy Space
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to="#testimonials" className="page-scroll">
                  {this.props.data
                    ? this.props.data.testimonials
                    : "loading..."}
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to="#contact" className="page-scroll">
                  {this.props.data ? this.props.data.contact : "loading..."}
                </NavHashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  translator: state.translator,
});

export default connect(mapStateToProps, { TranslateAction })(
  withRouter(Navigation)
);
