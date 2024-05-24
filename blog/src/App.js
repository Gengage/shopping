import './App.css';
import {useState} from 'react'
function App() {

  //const post = "우동" //변수
  const [글제목,글제목변경] = useState(["남자코트 추천","강남우동 맛집","파이썬 독학"])
  const [좋아요,변경] = useState(0)
  const logo = "REACT LOGO"
 
  
  return (
    <div className="App">
      <div className="black-nav">
      <h4 style={{color :'red',fontSize:'30px'}}>{logo}</h4>
      </div>

    <button onClick={ ()=>{
          let copy = [...글제목]
          copy.sort()
          글제목변경(copy)
        }
    }>정렬버튼</button>
    


      <button onClick = {()=>{

        let copy = [...글제목]
        copy[0] = "여자코트 추천"
        글제목변경(copy)
      }}>글수정</button>

      <div className="list">
      <h4> {글제목[0]}<span onClick={()=>{변경(좋아요+1)}}>👍</span> {좋아요} </h4> 
      <p>5월 23일 발행</p>
    </div>

    
    <div className="list">
      <h4>{글제목[1]}</h4>
      <p>5월 23일 발행</p>
    </div>
    <div className="list">
      <h4>{글제목[2]}</h4>
      <p>5월 23일 발행</p>
    </div>
    </div>
    
  );
}

export default App;
