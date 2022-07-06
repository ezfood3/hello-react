// import React from "react";

// const EventExFunc = () => {
//   // JSX 문법
//   return (
//     <>
//       <h1>이벤트 연습 ( 함수형 )</h1>
//       <input
//         type="text"
//         name="message"
//         placeholder="안아줘요"
//         onChange={(e) => {
//           // e : event객체, SyntheticBaseEvent객체
//           // console.log(e);
//           console.log(e.target.value);
//         }}
//       />
//     </>
//   );
// };

// export default EventExFunc;

// import React, { useState } from "react";

// const EventExFunc = () => {
//   // [상태이름, setter]
//   const [msg, setMsg] = useState("");
//   const [username, setUsername] = useState("");

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleClick(e);
//     }
//   };
//   const handleClick = (e) => {
//     if (e.target.name === "msg") {
//       setMsg("");
//     } else if (e.target.name === "username") {
//       setUsername("");
//     }
//   };
//   const handleChangeMsg = (e) => {
//     setMsg(e.target.value);
//   };
//   const handleChangeUN = (e) => {
//     setUsername(e.target.value);
//   };
//   return (
//     <>
//       <h1>이벤트 연습 ( 함수형 )</h1>
//       <input
//         type="text"
//         name="msg"
//         placeholder="안아줘요"
//         value={msg}
//         onKeyPress={handleKeyPress}
//         onChange={handleChangeMsg}
//       />
//       <input
//         type="text"
//         name="username"
//         placeholder="이름을 입력해주세요."
//         value={username}
//         onKeyPress={handleKeyPress}
//         onChange={handleChangeUN}
//       />
//       <div>{msg + " " + username}</div>
//       <button onClick={handleClick}>확인</button>
//     </>
//   );
// };

// export default EventExFunc;

import React, { useState } from "react";

const EventExFunc = () => {
  // [상태이름, setter]
  // const [msg, setMsg] = useState("");
  // const [username, setUsername] = useState("");

  const [jit, setJit] = useState({
    msg: "",
    username: "",
  });
  const { msg, username } = jit;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };
  const handleClick = (e) => {
    const newJit = {
      ...jit, // 복사
      [e.target.name]: "",
    };
    // const newJit = { msg: "", username: "" };
    setJit(newJit);
  };
  const handleChange = (e) => {
    const newJit = {
      ...jit,
      [e.target.name]: e.target.value,
    };
    setJit(newJit);
  };
  // const handleChangeUN = (e) => {
  //   setUsername(e.target.value);
  // };
  return (
    <>
      <h1>이벤트 연습 ( 함수형 )</h1>
      <input
        type="text"
        name="msg"
        placeholder="안아줘요"
        value={msg}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="이름을 입력해주세요."
        value={username}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
      />
      <div>{msg + " " + username}</div>
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventExFunc;
