// createRef 사용
// import React, { Component } from "react";
// import "./ValidateExRef.css";

// class ValidateExRef extends Component {
//   state = {
//     password: "",
//     clicked: false,
//     validated: false,
//   };

//   inputRef = React.createRef();

//   onChange = (e) => {
//     this.setState({ password: e.target.value });
//   };
//   onClick = (e) => {
//     this.setState({
//       clicked: true,
//       validated: this.state.password === "1234",
//     });
//     this.inputRef.current.focus();
//   };
//   render() {
//     return (
//       <>
//         <br />
//         <input
//           type="password"
//           ref={this.inputRef}
//           value={this.state.password}
//           onChange={this.onChange}
//           className={
//             this.state.clicked
//               ? this.state.validated
//                 ? "success"
//                 : "failure"
//               : ""
//           }
//         ></input>
//         <button onClick={this.onClick}>검증</button>
//       </>
//     );
//   }
// }

// export default ValidateExRef;

// 콜백함수 사용
import React, { Component } from "react";
import "./ValidateExRef.css";

class ValidateExRef extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  onChange = (e) => {
    this.setState({ password: e.target.value });
  };
  onClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "1234",
    });
    this.inputRef.focus();
  };
  render() {
    return (
      <>
        <br />
        <input
          type="password"
          ref={(ref) => {
            this.inputRef = ref;
          }}
          value={this.state.password}
          onChange={this.onChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.onClick}>검증</button>
      </>
    );
  }
}

export default ValidateExRef;
