
import './App.css';
import {useState} from 'react';
let bool = true;
function App() {
  let post = '리액트로 블로그 만드는 프로젝트';
  let [blogTitle,changeTitle] = useState(['남자 코트 추천','강남 우동 맛집','22FW 신상']);
  let [goodNum,addGood] = useState(0);
  return (
    <div className="App">
      <div className='header'>
         <h4>ReactBlog</h4>
      </div>
      <h5>{post}</h5>
      <button onClick={()=>{
        let copy = [...blogTitle];
        if(bool){
          copy.sort();
          changeTitle(copy);
          bool=false;
        }
        else{
          copy.sort(function(a,b){
            if(a<b) return 1;
            if(a>b) return -1;
            if(a===b) return 0;
          });
          changeTitle(copy);
          bool=true;
        }
      }}>
        가나다순정렬
      </button>
      <button onClick={()=>{
        let copy = [...blogTitle];
        copy[0]= '여자 코트 추천';
        changeTitle(copy)}}>
          제목 바꾸기</button>
      <div className='list'>
        <dl>
          <dt>{blogTitle[0]}</dt>
          <dd>8월 30일 발행 <div className='btn_area'><button onClick={()=>addGood(goodNum+1)}>👍</button> <span>{goodNum}</span></div></dd>
        </dl>
        <dl>
          <dt>{blogTitle[1]}</dt>
          <dd>8월 30일 발행</dd>
        </dl>
        <dl>
          <dt>{blogTitle[2]}</dt>
          <dd>8월 30일 발행</dd>
        </dl>
      </div>

     <Popup/>
    </div>
  );
}
//component
const Popup = ()=>{
  const date = new Date();
  return(
    <div className='popup'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  );
}

export default App;
