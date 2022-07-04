import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

class MyCom extends Component {
  static defaultProps = {
    name: "defaultName",
  };
  static propTypes = {
    name: PropTypes.string,
    hakbun: PropTypes.number.isRequired,
  };
  render() {
    // == function render() {
    const { name, hakbun, major, children } = this.props; // 구조분해할당, 비구조화할당
    const test = "React Test";
    return (
      <>
        <div className="react">{test}</div>
        <div>
          안녕하세요? 저는 {name} 이고, 학번은 {hakbun} 입니다. <br></br> 전공은{" "}
          {major}입니다.
        </div>
        <h1>{children} 예아.</h1>
      </>
    );
  }
}

/* MyCom.defaultProps = {
  name: "defaultName",
};

MyCom.propTypes = {
  name: PropTypes.string,
  hakbun: PropTypes.number.isRequired,
}; */

export default MyCom;
