import './App.css';
import {useState} from 'react'
function App() {

  //const post = "우동" //변수
  const [글제목,글제목변경] = useState(["남자코트 추천","대전우동 맛집","리엑트 독학"])
  const [좋아요,변경] = useState([0,0,0])
  let [title,setTitle]=useState(2)
  let [input,setInput] = useState("")
  const logo = "사용자 후기 게시판"
  let [modal,setModal] = useState(false) //모달창 상태 표현 false-닫힘 true -열림


  return (
    <div className="App" key="i">
      <div className="black-nav">
      <h4 style={{color :'white',fontSize:'25px'}}>{logo}</h4>
      </div>

      <button onClick={()=>{setTitle(0)}}>제목 변경</button>
      <button onClick={()=>{setModal(!modal)}}>모달창</button>

{         
   글제목.map(function(a, i){
      return (
        <div className="list" key={i}>
         <h4 onClick={()=>{ setModal(true); setTitle(i) }}>{ 글제목[i] }
            <span onClick={(e)=>{ /* e.stopPropagation() */ 
               let copy = [...좋아요];
               copy[i] = copy[i] + 1;
               변경(copy)  
             }}>👍</span> {좋아요[i]} 
          </h4>
          <p>5월 28일 작성</p>
        </div> )
  }) 
}  
   <input onChange={(e)=>{setInput(e.target.value)
  console.log(setInput) }}></input>    
  
  
      {
      modal === true ? <Modal title={title} color={"orange"} 글제목={글제목}></Modal> : null
      }
    
    </div>
    
  );
}

    // 모달창
function Modal(props){
  return(
    <div className='modal' style={{background:props.color}}>
        <h3>{props.글제목[props.title]}</h3>
        <p>날짜</p>
        <p>상세내용</p>
        {/*<button  onClick={()=>{
          props.글제목변경(['여자패딩추천','자바스크립트독학','대덕구맛집'])
        }} >글 수정</button>*/}
      </div>
  )
}

export default App;
