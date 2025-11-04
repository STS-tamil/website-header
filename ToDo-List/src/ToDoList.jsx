import React, {useState} from "react"
function ToDoList(){
    const [tasks,setTasks] = useState(["Eat Breakfast","Take a Shower","Walk The Dog"])
    const [newTask,setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
       if(newTask.trim() !== ""){
        setTasks(t =>[...t,newTask])
        setNewTask("")
       }  
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        const updatedTasks = [...tasks]
        if(index > 0){
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        const updatedTasks = [...tasks]
        if(index < tasks.length){
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    



    return(<>
         <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a Task..." value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=><li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={()=>moveTaskUp(index)}>Up👆</button>
                    <button className="down-button" onClick={()=>moveTaskDown(index)}>Down👇</button>

                    </li>)}
            </ol>
         </div>
          </>
          )
}

export default ToDoList