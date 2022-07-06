# React 소개
- JS UI Library
  - 오직 View만 관심
  - 추가적인 기능이 필요하면 다른 라이브러리가 요구됨
  - axios, router, redux, ...

- JS 변화 : UI
- React : Meta사
- Vue : Google의 개발자가 나와서 개발
- Angular.js : Google
- Svelte

- JS 서버용 : Node.js (+ Express)
- JS Desktop용 : Electron.js
  - VScode, Atom, Slack
- JS 모바일 앱
  - Cordova (phonegap)
  - Ionic
  - Titanium
  - React Native

- UI용 JS사용하는 개념
- MVC (Model - View - Controller) : React
- MVVM (Model - View - ViewModel) : View
- MVW (Model - View - Whatever) : angular만 사용
  - Model : 표시할 데이터 : axios/fetch
  - View : 데이터를 화면에 표시
    - Controller에서 변경요청을 받으면 화면을 변경(Mutate)
  - Controller : 모델에 데이터의 생성, 조회, 수정, 삭제(CRUD)를 요청
    - 요청 결과를 View에 반영하도록 요청

- React의 용어 정의
  - Component(컴포넌트) : 특정 부분이 어떻게 생길지 정의해 두는 선언체
    - 구성품, 부품 : 웹 화면을 다루기 쉬운 단위로 나눠서 정의해 두는 객체 또는 함수
- Template(템플릿) : 데이터 셋이 주어지면 HTML태그 형식으로 문자열로 변환
- Rendering(렌더링) : 사용자의 화면을 만드는 것
  - 초기 렌더링 : 제일 처음화면 작성
    - DOM : document.querySelector(), document.getElementById()
  - 리 렌더링 : 다시 화면 작성
    - React진영 : Virtual DOM

# React 작업환경 구축
1. node 설치
2. npm, yarn 설치
3. VScode 설치
   1. ESLint 설치
   2. Reactjs Code Snippets
   3. Prettier - Code formatter
   4. korean Language Pack for VSCode
4. git 설치
5. create-react-app 패키지로 프로젝트 생성
    - 웹팩(webpack), 바벨(babel), 각종 설정을 한꺼번에 해줌
    - yarn create react-app hello-react

# JSX
- react에서 컴포넌트 정의하기 위해 사용하는 문법
- ES5기준
- XML 비슷, 일반적인 HTML이 아님
- JS의 확장문법을 이용
- Webpack으로 실행전에 번들링(bundling, compile) 처리
  - Babel로 JS코드로 번역
- React 학습 버전 : 16.8
- 최신버전 : 18.2.0

# 컴포넌트
- 함수형 컴포넌트
  - 권장됨
- 클래스형 컴포넌트

# JSX문법
1. 닫힌 Element만 입력가능 (XML문법 준수)
  - 아래 tag는 Error
  - <input> -> <input /> or <input></input>
  - <img> -> <img /> or <img></img>
  - <br> -> <br /> or <br></br>
  - ...

2. 반드시 부모 엘리먼트는 하나여야 한다. 감싸인 엘리먼트
  ```JSX 
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
  ```

3. JSX에서 JS표현을 실행시키고 싶으면
  - {JS표현}
  - {% 넌적스 표현 %}

4. JSX에서 if문 사용 불가
  - 삼항연산자 이용 -> ? : ;

5. 조건부 랜더링
  - AND(&&)
  - 숫자 사용시 주의

6. undefined 처리 : 렌더링 안함
  - || (OR) 
  - default 출력 처리

7. 인라인 스타일 (CSS)
  - 스타일 속성값 명칭 규칙
    - CSS : background-color, font-size : snake_case
    - React : backgroundColor, fontSize : camelCase
  - JSON객체형식으로 스타일 지정

8. class 속성이 아니라 className 속성명 사용
  - <div class = 'form-input'> X -> <div className = 'formInput'> O

9. 주석
  - {* 주석입니다. *}

* ESLint : JS 문법 검사 도구
* Prettier : 코드 스타일 자동정리 도구
* F1 or commend + shift + p 

# Component
- Class 형
  - 자동완성 : rcc + enter
  - Component를 상속받기
  - render() 메서드 구현해야함
  - render() 메서드의 반환 : JSX
  - 특징
    - state사용 가능, 라이플사이클 활용이 쉽다.
    - 임의의 메소드를 정의할 수 있다.
- Function 형 (함수형)
  - 자동완성 : rsc + enter
  - 임의의 함수를 정의해 사용 가능
  - 장점
    - 클래스보다 간편하게 선언(정의, 작성) 가능
    - 사용메모리가 적다
  - 단점
    - state, 라이플사이클 사용이 어렵다. -> 리액트 16.8이후 Hooks기능으로 극복

* this 객체
  - function 키워드
    - this : 자신이 소속되어 있는 객체
```js
  function BlackDog() {
  this.name = '흰둥이';
    return {
      name: '검둥이',
      bark:function(){
        console.log(this.name + "멍멍") // 자신이 소속되어 있는 객체
      }
    }
  }

  const bDog = new BlackDog();
  bDog.bark(); // 검둥이멍멍
  bDog // {name: '검둥이', bark: ƒ}
```
  - 화살표 함수
    - this : 자신이 소속된 외부객체의 인스턴스
```js
  function WhiteDog() {
  this.name = '흰둥이';
    return {
      name: '검둥이',
      bark: () => {
        console.log(this.name + "멍멍") // 자신이 소속된 외부객체의 인스턴스
      }
    }
  }

  const wDog = new WhiteDog();
  wDog.bark(); // 흰둥이멍멍
  wDog // {name: '검둥이', bark: ƒ}
```

* 부모 컴퍼넌트, 자식 컴퍼넌트

* props
  - properties
  - 속성
  - 컴포넌트 정의시 속성도 정의할 수 있음
  - ( 부모 컴포넌트 )에서 ( 자식 컴포넌트 )로 정보를 전달

  - props의 유효성 검사
    - https://github.com/facebook/prop-types
    - propsTypes 지정하기
    - isRequired 필수값
    - defaultProp 지정하기
    - children : 컴포넌트의 Content(내용) 참고

```HTML
<a 속성(attribute)> // 시작태그
  Content // 내용
</a> // 종료태그
```

* state
  - 상태
  - 컴포넌트내에서의 상태 변화(정보) 취급
  - 함수형, 클래스형
  - 클래스형
    - state: 객체처리, setState()
  - 함수형
    - Hooks(useHooks()) ( 16.8 이후 )
    - 상태가 배열, 객체로 정의되는 경우
      - 기존의 배열, 객체의 복사본을 만들고 수정부분만 업데이트 하여 수정

* 객체의 복사본을
  - const obj = {a:1,b:2,c:3}
  - const copyObj = {...obj,b:44}
  - console.log(obj); // {a: 1, b: 2, c: 3}
  - console.log(copyObj); // {a: 1, b: 44, c: 3}

* 배열의 복사
  - map(), forEach(), reduce(), filter()

# 이벤트 핸들링
- 웹브라우저의 HTML엘리먼트의 이벤트와 인터페이스가 동일
- 주의사항
1. 이벤트이름 : 카멜표기법
  - onclick (X) // 소문자
  - onClick (O) // 대문자
2. 이벤트핸들러 : 함수 또는 함수형태의 객체로 지정
3. DOM 엘리먼트의 JSX 컴포넌트에서만 이벤트 설정 가능
  - React에서 정의한 컴포넌트에서는 이벤트 설정을 우회적으로 해야 함
  - <FunMyCom onClick={}></FunMyCom> : props로 해석함
  - FunMyCom.js 내의 render처리시 <div onClick={props.onClick}></div>
  - 참고 : https://ko.reactjs.org/docs/handling-events.html
  - 참고 : https://facebook.github.io/react/docs/events.html
  - 주로 사용되는 이벤트
    - onClick
    - onKeyUp
    - onMouseUp
    - onMouseMove
    - onMouseOver
    - onChange

# ref : DOM에 이름달기
- HTML에서 id
  - <div id="id"></div>
- JSX에서 ref
  - <TestCom ref="{}"></TestCom>

# ref 사용하기 : <input> 태그처럼 DOM 엘리먼트의 JSX객체
1. 콜백함수 사용
  - <input ref={(ref)=>{this.inputRef=ref;}}></input>
  - this.inputRef.focus();

2. createRef() 사용 ( React 내장 함수 )
  - inputRef = React.createRef(); 
  - ref={this.inputRef} // input태그 안
  - this.inputRef.current.focus();

# ref사용하기 : 사용자 정의 컴포넌트에서 사용하기

# 컨포넌트를 반복해서 나타내기
- 자바스크립트의 map() 메서드 이용
- array.map( 콜백[, this옵션] )
  - array의 요소(원소)갯수만큼의 횟수로 콜백함수 호출하여 그 결과를 새로운 배열로 반환
  - 파라미터
    - 콜백
      - 파라미터 : 현재요소 값 외에는 생략가능
        - 현재요소 값
        - 현재요소의 인덱스
        - 현재 처리중인 원본배열
    - this옵션
      - this객체를 지정하여 실행하고자 할 때 설정