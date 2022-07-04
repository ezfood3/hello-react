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

- undefined 처리 == default 출력 처리
  <>{name || "React"}</>
  // React 값을 default로 출력시키기

- 인라인 스타일 (CSS)
  const name = "React";
  const styleObj = {
    backgroundColor: "cyan",
    color: "red",
    fontSize: "34px",
    fontWeight: "bold",
    padding: 16, // 숫자만 적으면 px생략가능
  };
  <>
    <div style={styleObj}>{name}</div>
    <div
      style={{
        backgroundColor: "yellow",
        color: "blue",
        fontSize: "34px",
        fontWeight: "bold",
        padding: 16, // 숫자만 적으면 px생략가능
      }}>
      {name}
    </div>
- class 속성이 아니라 className 속성명 사용
    <div className="reactTest">{name}</div>
  </>
*/

function App() {
  // 함수형 컴포넌트 작성 : App 컴포넌트

  const test = "test";
  return (
    // JSX 객체, JSX의 문법으로 작성
    // JSX의 주석 : {/* 주석 */}
    <>{test}</>
  );
}

export default App;
// module.export = App;
