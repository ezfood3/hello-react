import React, { Component } from "react";

class LifeCycleCls extends Component {
  // state = {
  //   number: 0,
  //   color: "null",
  // };

  myRef = null;

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      color: "null",
    };
    console.log("생성자");
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps() 호출");
    if (nextProps.color !== nextState.color) {
      return { color: nextProps.color };
    } else {
      return null;
    }
  }

  componentDidMount() {
    console.log("componentDidMount() 호출");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate() 호출");
    return nextState.number % 10 !== 4; // 일의자리가 4인 숫자는 렌더링 금지
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate() 호출");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate() 호출", prevProps, prevState);
    if (snapshot) {
      console.log("업데이터전의 색상값 : ", snapshot);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() 호출");
  }

  onClick = (e) => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    console.log("render() 호출");
    const myStyle = {
      color: this.props.color,
    };
    return (
      <>
        {/* {this.props.missing.value} */}
        {/* 에러 발생 */}
        <h1
          style={myStyle}
          ref={(ref) => {
            this.myRef = ref;
          }}
        >
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.onClick}>+1</button>
      </>
    );
  }
}

export default LifeCycleCls;
