import './App.css';
import {useState} from 'react'
function App() {

  //const post = "우동" //변수
  const [글제목,글제목변경] = useState(["남자코트 추천","대전우동 맛집","리엑트 독학"])
  const [좋아요,변경] = useState([0,0,0])
   
  const logo = "REACT LOGO"
  let [modal,setModal] = useState(false) //모달창 상태 표현 false-닫힘 true -열림


  return (
    <div className="App" key="i">
      <div className="black-nav">
      <h4 style={{color :'red',fontSize:'30px'}}>{logo}</h4>
      </div>
      {/* 글 정렬버튼 */}
    <button onClick={ ()=>{
          let copy = [...글제목]
          copy.sort()
          글제목변경(copy)
        }}>정렬버튼</button>
      {/* 글 수정 버튼 */}
      <button onClick = {()=>{
        let copy = [...글제목]
        copy[0] = "여자코트 추천"
        글제목변경(copy)
      }}>글수정</button>

{         
   글제목.map(function(a, i){
      return (
        <div className="list">
          <h4>{ 글제목[i] } 
            <span onClick={()=>{ 
               let copy = [...좋아요];
               copy[i] = copy[i] + 1;
               변경(copy)  
             }}>👍</span> {좋아요[i]} 
          </h4>
          <p>2월 18일 발행</p>
        </div> )
  }) 
}          {/* 모달동작*/}
    <div className="list">
      <h4 onClick={()=>{setModal(!modal)}}>{글제목[0]}</h4>
      <p>5월 23일 발행</p>
    </div>
      {
      modal === true ? <Modal color={"orange"} 글제목={글제목}></Modal> : null
      }
    
    </div>
    
  );
}
    // 모달창
function Modal(props){
  return(
    <div className='modal' style={{background:props.color}}>
        <h3>{props.글제목[2]}</h3>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글 수정</button>
      </div>
  )
}

export default App;
