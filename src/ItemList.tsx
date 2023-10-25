
import {addType} from "./typeScript/typescript"
import './App.css'
type addTypeTask={
    task:addType;
    handleDelete(nameTodoDelete:string):void
}
function ItemList({task,handleDelete}:addTypeTask) {
    
  return (
    <div className="card">
       <div> <p>{task.taskName} </p><p>{task.taskNumber} </p>
        <button className="deletebutton" onClick={()=>handleDelete(task.taskName)}>Delete</button>
    </div>
    </div>
  )
}

export default ItemList