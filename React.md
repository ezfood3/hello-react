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
- XML 비슷
- JS의 확장문법을 이용
- Webpack으로 실행전에 번들링(bundling, compile) 처리
  - Babel로 JS코드로 번역
- React버전 : 16.8
- 최신버전 : 18.2.0

# 컴포넌트
- 함수형 컴포넌트
  - 권장됨
- 클래스형 컴포넌트

# JSX문법
1. 닫힌 Element만 입력가능
  - 아래 tag는 Error
  - <input> -> <input /> or <input></input>
  - <img> -> <img /> or <img></img>
  - <br> -> <br /> or <br></br>

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
