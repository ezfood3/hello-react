// import logo from "./logo.svg";
// const logo = require("./logo.svg");
// import React, { Fragment } from "react";
import React from "react";
import "./App.css";

/*
- 감싸인 엘리먼트
  <div> // 부모 컴포넌트
    <h1>리액트 안녕!</h1>
    <h2>안녕하세요</h2>
  </div>

  <Fragment> // 부모 컴포넌트
    <h1>리액트 안녕!</h1>
    <h2>안녕하세요</h2>
  </Fragment>

  <> // 부모 컴포넌트
    <h1>리액트 안녕!</h1>
    <h2>안녕하세요</h2>
  </>

- 삼항 연산자, JS표현
  const name = "React";
  <>{name === "React" ? <h1>True</h1> : <h1>False</h1>}</>

- 조건부 랜더링 (숫자 사용시 주의)
  const name = "React";
  const number = 0;
  <>
    {name === "React" && <h1>React</h1>}
    {number && <h1>hi</h1>}
  </>
*/

function App() {
  // 함수형 컴포넌트 작성 : App 컴포넌트
  const name = "React";
  const number = 0;
  return (
    // JSX 객체, JSX의 문법으로 작성
    // JSX의 주석 : {/* 주석 */}
    <>
      {name === "React" ? <h1>React</h1> : null}
      {name === "React" && <h1>React</h1>}
      {number && <h1>hi</h1>}
    </>
  );
}

export default App;
// module.export = App;
