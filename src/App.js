import React, { Component } from "react";
import "./App.css";
import MyCom from "./MyCom";
import FuncMyCom from "./FuncMyCom";
import StateComCls from "./StateComCls";
import StateComFunc from "./StateComFunc";
import EventExFunc from "./EventExFunc";
import EventExCls from "./EventExCls";
import ValidateExRef from "./ValidateExRef";
import ScrollBoxRef from "./ScrollBoxRef";

class App extends Component {
  render() {
    const name = "React";
    const test = 3;
    return (
      <>
        <div className="react">{name}</div>
        <MyCom name="김영진" hakbun={1234567} major="Japan IT">
          여기는 내용입니다.
        </MyCom>
        <FuncMyCom name="최영진" age={23} gender="남" roomnum="606"></FuncMyCom>
        <FuncMyCom name={name} age={test} gender="여" roomnum="606">
          ありがとうございます。
        </FuncMyCom>
        <StateComCls></StateComCls>
        <StateComFunc></StateComFunc>
        <EventExFunc></EventExFunc>
        <EventExCls></EventExCls>
        <ValidateExRef></ValidateExRef>
        <ScrollBoxRef
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        ></ScrollBoxRef>
        <button
          onClick={(e) => {
            this.scrollBox.scrollBoxBottom();
          }}
        >
          밑으로
        </button>
        <button
          onClick={(e) => {
            this.scrollBox.scrollBoxTop();
          }}
        >
          위로
        </button>
        <ScrollBoxRef></ScrollBoxRef>
      </>
    );
  }
}

export default App;
