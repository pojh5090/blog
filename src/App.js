/* eslint-disabled */
import React, { useState } from 'react';  //react의 내장함수를 쓸게요~
import './App.css';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // function 반복된UI() {
  //   var 어레이 = [];
  //   for(var i = 0; i < 3; i++) {
  //     어레이.push(<div>안녕</div>);
  //   }
  //   return 어레이;
  // }

  function 글발행하기() {
    var newArray = [...글제목];
    var newTitle = 입력값;
    newArray.push(newTitle);
    글제목변경(newArray);
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
          <div className='list' key={i}>
            <h3 onClick = {() => { 누른제목변경(i) }}>{글} <span style={ {cursor : 'pointer'} } onClick={() => { 따봉변경(따봉 + 1) } }>👍</span>{ 따봉 }</h3>
            <p>2월 15일 발행</p>
            <hr/>
          </div>
          )
        })
      }
      {/* {반복된UI()} */}
      {/* <input onChange={ (e) => { 입력값변경(e.target.value) } } /> */}

      <div className="publish">
        <input onChange={ (e) => { 입력값변경(e.target.value) } }/>
        <button onClick={ () => {
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy);
        }}>저장</button>
      </div>

      <RadioButtonsGroup style={{ border : '1px solid red'}}></RadioButtonsGroup>
      
      <Button variant="contained" style={{width: '300px'}}disabled>Hello World</Button>
      <br></br>
      <button style={{ cursor : 'pointer'}} onClick={ () => { modal변경(!modal) }}>열고 닫기</button>

        <Profile />  

      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }
    </div>
  );
}

function RadioButtonsGroup() {
  return (
    <FormControl style={{ border: '1px soild red'}}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
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

/*예전 리액트 문법 */
class Profile extends React.Component {
  constructor(){
    super();
    this.state = { name : 'Kim', age : 30 }
  }

  changeName() {
    this.setState( {name : 'Park'})
  }  
  // -->이렇게 쓴다면 사용할 때 onClick={this.changeName.bind(this)} 해주어야한다. ㅠㅠ

  changeName2 = () => {
    this.setState( {name : 'Park'})
  }
  // -->이렇게 쓴다면 bind 함수 안써주어도 ok

  render(){
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name}입니다.</p>
        <button onClick={ () => {this.setState({name : 'Park'})}}>프로필버튼</button>
      </div>
    )
  }
}

export default App;
