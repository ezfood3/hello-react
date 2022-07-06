import React from "react";

const EventExFunc = () => {
  // JSX 문법
  return (
    <>
      <h1>이벤트 연습 ( 함수형 )</h1>
      <input
        type="text"
        name="message"
        placeholder="안아줘요"
        onChange={(e) => {
          // e : event객체, SyntheticBaseEvent객체
          // console.log(e);
          console.log(e.target.value);
        }}
      />
    </>
  );
};

export default EventExFunc;
