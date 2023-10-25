
import './App.css'
import React,{ useState } from 'react'
import {addType} from "./typeScript/typescript"
import ItemList from './ItemList'

function App() {

const [task, setTask] = useState<string>("")
const [taskNumber, setTaskNumber] = useState<number>(0)
const [add, setAdd] = useState<addType[]>([])
console.log(add);

const deleteTask=(nameTodoDelete:string):void=>{  //silme işlemi yaptığım metot
        setAdd(add.filter((task)=>{
          return task.taskName !==nameTodoDelete
        }))
}

const handeSubmit=():void=>{

  const newTask = {taskName:task, taskNumber:taskNumber};
  setAdd([...add,newTask])
  setTask("")
  setTaskNumber(0)
}
const handeChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
if(event.target.name==="task"){
  setTask(event.target.value);
}
else{       
  setTaskNumber(Number(event.target.value));  //(event.target.value) stringdir.Ben number ataması yaptım number olarak görmesi için başına Number yazdım
}


  
}
  return (
    <div className="App">
    <div className="maincard">
      <h1 className='cardH1'>React-TypeScript</h1>
      <input 
      className="maincardinput"
      name='task'
      type="text"
      value={task}
      placeholder='text giriniz'
      onChange={handeChange}
      />
      <input
      className="maincardinput"
      name='taskNumber'
      type="number"
      value={taskNumber}
      placeholder='number giriniz'
      onChange={handeChange}
      />
      <button className="maincardbutton" onClick={handeSubmit}>Add</button>
      </div>
      <div className="todocart">
        {add.map((task:addType,index:number)=>{
          return(
          <ItemList key={index} task={task}  handleDelete={deleteTask}/>)
        })}
      </div>
    </div>
  )
}

export default App
