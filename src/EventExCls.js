// import React, { Component } from "react";

// class EventExCls extends Component {
//   state = {
//     // 상태 초기화
//     msg: "",
//   };
//   render() {
//     return (
//       // JSX의 문법
//       <>
//         <h1>이벤트 연습 ( 클래스형 )</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="안아줘요"
//           value={this.state.msg}
//           onKeyPress={(e) => {
//             if (e.key === "Enter") {
//               alert(this.state.msg);
//               this.setState({ msg: "" });
//             }
//           }}
//           onChange={(e) => {
//             // e : event객체, SyntheticBaseEvent객체
//             // console.log(e);
//             console.log(e.target.value);
//             this.setState({ msg: e.target.value });
//           }}
//         />
//         <div>{this.state.msg}</div>
//         <button
//           onClick={(e) => {
//             alert(this.state.msg);
//             this.setState({ msg: "" });
//           }}
//         >
//           확인
//         </button>
//       </>
//     );
//   }
// }

// export default EventExCls;

// import React, { Component } from "react";

// class EventExCls extends Component {
//   state = {
//     // 상태 초기화
//     msg: "",
//   };
//   handleKeyPress(e) {
//     // this 문제가 있다.
//     if (e.key === "Enter") {
//       alert(this.state.msg);
//       this.setState({ msg: "" });
//     }
//   }
//   handleChange(e) {
//     console.log(e.target.value);
//     this.setState({ msg: e.target.value });
//   }
//   handleClick(e) {
//     alert(this.state.msg);
//     this.setState({ msg: "" });
//   }
//   render() {
//     return (
//       // JSX의 문법
//       <>
//         <h1>이벤트 연습 ( 클래스형 )</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="안아줘요"
//           value={this.state.msg}
//           onKeyPress={this.handleKeyPress}
//           onChange={this.handleChange}
//         />
//         <div>{this.state.msg}</div>
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// export default EventExCls;

// import React, { Component } from "react";

// class EventExCls extends Component {
//   state = {
//     // 상태 초기화
//     msg: "",
//   };
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.handleKeyPress = this.handleKeyPress.bind(this);
//   }
//   handleKeyPress(e) {
//     // this 문제해결 방법 1 : bind 사용하기.
//     if (e.key === "Enter") {
//       alert(this.state.msg);
//       this.setState({ msg: "" });
//     }
//   }
//   handleChange(e) {
//     console.log(e.target.value);
//     this.setState({ msg: e.target.value });
//   }
//   handleClick(e) {
//     alert(this.state.msg);
//     this.setState({ msg: "" });
//   }
//   render() {
//     return (
//       // JSX의 문법
//       <>
//         <h1>이벤트 연습 ( 클래스형 )</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="안아줘요"
//           value={this.state.msg}
//           onKeyPress={this.handleKeyPress}
//           onChange={this.handleChange}
//         />
//         <div>{this.state.msg}</div>
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// export default EventExCls;

// import React, { Component } from "react";

// class EventExCls extends Component {
//   state = {
//     // 상태 초기화
//     msg: "",
//   };
//   // constructor(props) {
//   //   super(props);
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleClick = this.handleClick.bind(this);
//   //   this.handleKeyPress = this.handleKeyPress.bind(this);
//   // }
//   handleKeyPress = (e) => {
//     // this 문제해결 방법 2 : 화살표 함수 사용하기.
//     if (e.key === "Enter") {
//       alert(this.state.msg);
//       this.setState({ msg: "" });
//     }
//   };
//   handleChange = (e) => {
//     console.log(e.target.value);
//     this.setState({ msg: e.target.value });
//   };
//   handleClick = (e) => {
//     alert(this.state.msg);
//     this.setState({ msg: "" });
//   };
//   render() {
//     return (
//       // JSX의 문법
//       <>
//         <h1>이벤트 연습 ( 클래스형 )</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="안아줘요"
//           value={this.state.msg}
//           onKeyPress={this.handleKeyPress}
//           onChange={this.handleChange}
//         />
//         <div>{this.state.msg}</div>
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// export default EventExCls;

import React, { Component } from "react";

class EventExCls extends Component {
  state = {
    // 상태 초기화
    msg: "",
    username: "",
  };
  handleKeyPress = (e) => {
    // input태그 여러개일때 하나의 이벤트핸들러로 처리하기
    if (e.key === "Enter") {
      this.handleClick(e); // 클릭하는 이벤트와 같음.
    }
  };
  handleClick = (e) => {
    alert([e.target.value]);
    this.setState({ [e.target.name]: "" });
  };
  handleChange = (e) => {
    // e: Event객체, SyntheticBaseEvent객체
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    // event의 target(input)의 name(msg, username)
  };
  render() {
    return (
      // JSX의 문법
      <>
        <h1>이벤트 연습 ( 클래스형 )</h1>
        <input
          type="text"
          name="msg"
          placeholder="안아줘요"
          value={this.state.msg}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="이름을 입력해주세요."
          value={this.state.username}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
        <div>{this.state.msg + " " + this.state.username}</div>
        <button onClick={this.handleClick}>확인</button>
      </>
    );
  }
}

export default EventExCls;
