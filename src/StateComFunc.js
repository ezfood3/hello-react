import React, { useState } from "react";

// 사전지식
// 배열의 구조분해할당
// const arr = [ 1, 2,];
// const one = arr[ 0 ];
// const two = arr[ 1 ];
// ->
// const arr1 = [ 1, 2,];
// const [one, two] = arr1;

const StateComFunc = () => {
  const [number, setNumber] = useState(0);
  const [noproblem, setNoproblem] = useState("");
  // 상태 선언 및 초기화  : [상태명, 상태변경Setter함수명] = useState(초기값);
  return (
    // JSX의 문법
    <>
      <h1>{number}</h1> {/* 상태값 조회 */}
      <h2>{noproblem}</h2>
      <button
        onClick={() => {
          setNumber(number + 1); // 상태변화는 Setter함수로만 가능
          setNoproblem(noproblem + "안아줘요");
        }}
      >
        +1
      </button>
    </>
  );
};

export default StateComFunc;
