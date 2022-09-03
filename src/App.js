
import './App.css';
import {useState} from 'react';
let bool = true;
function App() {
  let post = '리액트로 블로그 만드는 프로젝트';
  let [blogTitle,changeTitle] = useState(['남자 코트 추천','강남 우동 맛집','22FW 신상','새로운 타이틀1','새로운 타이틀2']);
  let [goodNum,addGood] = useState([...blogTitle].map(function(){
    return 0;
  }));
  let [popup,setPopup] = useState(false); 
  let [title,setTitle] = useState(0);
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
        {
          [...blogTitle].map(function(a,b){
            return  (
            <dl key={b}>
            <dt onClick={()=>{setPopup(!popup);setTitle(b)}}>{blogTitle[b]}</dt>
            <dd>8월 30일 발행 <div className='btn_area'><button onClick={()=>{let copy = [...goodNum]; copy[b]=copy[b]+1; addGood(copy)}}>👍</button> <span>{goodNum[b]}</span></div></dd>
            </dl>
            )
          })

        }
      </div>
        {
          // 삼항 연산자 ==> 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드 
          popup==true ? <Popup blogTitle={blogTitle} popup={popup} setPopup={setPopup} changeTitle={changeTitle} title={title}/>: null
        }
    </div>
  );
}
//component
const Popup = (props)=>{
      return(
        <div className='popup'>
        <h4>{props.blogTitle[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{props.setPopup(!props.popup)}} className='close'>X</button>
        <button>글 수정</button>
        </div>
      );

}

export default App;
