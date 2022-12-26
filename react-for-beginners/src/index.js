import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <React.StrictMode>
    <App />
  //  </React.StrictMode> //    <- 리액트 앱을 최소 생성하면 기본적으로 생성되는 태그! 리액트에서 제공하는 검사 도구로 개발 모드일때만 디버그를 하며 해당 태그로 감싸져 있는 부분은 자손까지 검사한다
);                    //    

