import React from "react";
import PropsTypes from "prop-types";

const myStyle = {
  backgroundColor: "yellow",
  color: "blue",
  fontSize: "34px",
  fontWeight: "bold",
  padding: 16, // 숫자만 적으면 px생략가능
};

//함수형
const FuncMyCom = (props) => {
  // ({ name, age, gender, roomnum }) => {
  const funcTest = "일본반";
  const { name, age, gender, roomnum } = props;
  return (
    <>
      <div style={myStyle}> {funcTest + "입니다."}</div>
      <div>
        <span>{name}</span>
        <p>{age}</p>
        <h6>{gender}</h6>
        <b>{roomnum}</b>
        <h1>{props.children}</h1>
      </div>
    </>
  );
};

// default
// FuncMyCom.defaultProps = {
//   name: "일본IT",
// };

// 유효성검사
FuncMyCom.propTypes = {
  name: PropsTypes.string.isRequired, // String값, 필수값
  age: PropsTypes.number, // number값
};

export default FuncMyCom;
