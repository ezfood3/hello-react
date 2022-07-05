// state 처리 방법 1

// import React, { Component } from "react";

// class StateComCls extends Component {
//   // state 처리 방법 1 : constructor에서 객체로 설정
//   constructor(props) {
//     // 생성자에서 초기값 설정
//     super(props); // 반드시 먼저 호출되로록 구현해야 함

//     this.state = { number: 0, noproblem: "" }; // 상태의 초기값 설정 { 상태값명1: 초기치1, 상태값명2: 초기치2, ... }
//   }
//   render() {
//     const { number, noproblem } = this.state; // 구조분해할당, 상수와 상태 연결
//     return (
//       // JSX의 문법
//       <>
//         <h1>{number}</h1> {/* 상태값 조회 */}
//         <h2>{noproblem}</h2>
//         <button
//           onClick={() => {
//             this.setState({ number: number + 1 });
//             this.setState({ noproblem: noproblem + "就職" });
//             // 상태의 변경 : this.setState({ 상태값명: 변경치 })
//           }}
//         >
//           +1
//         </button>
//       </>
//     );
//   }
// }

// export default StateComCls;

// state 처리 방법 2

// import React, { Component } from "react";

// class stateComCls extends Component {
//   // state 처리 방법 2
//   state = {
//     // 상태 초기화 방법
//     number: 0,
//     noproblem: "",
//   };

//   render() {
//     const { number, noproblem } = this.state; // 구조분해할당, 상수와 상태 연결
//     return (
//       // JSX의 문법
//       <>
//         <h1>{number}</h1> {/* 상태값 조회 */}
//         <h2>{noproblem}</h2>
//         <button
//           onClick={() => {
//             this.setState({ number: number + 1 });
//             this.setState({ noproblem: noproblem + "就職" });
//             // 상태의 변경 : this.setState({ 상태값명: 변경치 })
//           }}
//         >
//           +1
//         </button>
//       </>
//     );
//   }
// }

// export default stateComCls;

import React, { Component } from "react";

class stateComCls extends Component {
  // state 처리 방법 2
  state = {
    // 상태 초기화 방법
    number: 0,
    noproblem: "",
  };

  render() {
    const { number, noproblem } = this.state; // 구조분해할당, 상수와 상태 연결
    return (
      // JSX의 문법
      <>
        <h1>{number}</h1> {/* 상태값 조회 */}
        <h2>{noproblem}</h2>
        <button
          onClick={() => {
            // function X, arrow function O
            this.setState((prevState) => {
              // prevState : 이전의 상태값
              return { number: prevState.number + 1 };
            }); // 비동기적으로 작동 -> 콜백함수로 작성해야
            this.setState(
              (prevState, props) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log("상태 변경 완료");
              }
            );
            // prevState => ({ number: prevState.number + 1, })
            // this.setState({ noproblem: noproblem + "就職" });
            // 상태의 변경 : this.setState({ 상태값명: 변경치 })
          }}
        >
          +2
        </button>
      </>
    );
  }
}

export default stateComCls;
