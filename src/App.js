
import './App.css';
import {useState} from 'react';
function App() {
  let post = '리액트로 블로그 만드는 프로젝트';
  let [blogTitle,b] = useState('남자 코트 추천');

  return (
    <div className="App">
      <div className='header'>
         <h4>ReactBlog</h4>
      </div>
      <h5>{post}</h5>
      <div className='list'>
        <dl>
          <dt>{blogTitle}</dt>
          <dd>8월 30일 발행</dd>
        </dl>
        <dl>
          <dt>글 제목</dt>
          <dd>8월 30일 발행</dd>
        </dl>
        <dl>
          <dt>글 제목</dt>
          <dd>8월 30일 발행</dd>
        </dl>
      </div>
    </div>
  );
}

export default App;
