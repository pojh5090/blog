/* eslint-disabled */
import React, { useState } from 'react';  //react의 내장함수를 쓸게요~
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  function 반복된UI() {
    var 어레이 = [];
    for(var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }
    return 어레이;
  }

  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경(newArray);
  // }
  //==> 글제목변경(['여자 코트 추천', '강남 우동집', '파이썬 독학']); 와 같음!
  //<button style={{ cursor : 'pointer'}} onClick={제목바꾸기}>버튼</button>

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {
        글제목.map(function(글, i){
          return (
          <div className='list'>
            <h3 onClick = {() => { 누른제목변경(i) }}>{글} <span style={ {cursor : 'pointer'} } onClick={() => { 따봉변경(따봉 + 1) } }>👍</span>{ 따봉 }</h3>
            <p>2월 15일 발행</p>
            <hr/>
          </div>
          )
        })
      }
      {/* {반복된UI()} */}
      <input />

      <button style={{ cursor : 'pointer'}} onClick={ () => { modal변경(!modal) }}>열고 닫기</button>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
        <h2>{ props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
