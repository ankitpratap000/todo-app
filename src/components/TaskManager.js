import React, {useState} from "react";
function TaskManager(){
const[tasks,setTasks]=useState([]);
const[newTask,setNewTask]=useState("");

// to edit the task 
const[editTaskId,setEditTaskId]=useState(null);
const[editText,setEditText]=useState("");

const startEdit = (task) =>{
    setEditTaskId(task.id);
    setEditText(task.text);
};

// save edited task

const saveEdit = ()=>{
    setTasks(tasks.map((task) =>
        task.id === editTaskId? {...task,text :editText }: task
    ));
    setEditTaskId(null);// exit edit mode 
    setEditText("");// clear i/p field
};
// add a new task
    function addTask() {
        if (newTask.trim() === "") return;

        const newTaskObject = {
            id: Date.now(),
            text: newTask,
            completed: false,
        };
        setTasks([...tasks, newTaskObject]);
        setNewTask("");
    }

// delete a task
const deleteTask = (taskId) => {
    setTasks(tasks.filter((task)=>task.id!==taskId));
};

const toggleTaskCompletion = (taskId) =>
    setTasks(
        tasks.map((task)=>
            task.id === taskId ? {...task,completed:!task.completed}:task
        )
    );


return (
    <div>
        <input 
        type="text"
        palceholder="enter a new task"
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id}>
                    <input type="checkbox"
                    checked={task.completed}
                    onChange={()=>toggleTaskCompletion(task.id)}
                    />
                    <button onClick={()=>deleteTask(task.id)}>❌</button>
                    {editTaskId === task.id ? (
      <>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={saveEdit}>Save</button>
      </>
    ) : (
      <>
                    {task.text}
                    <button onClick={() => startEdit(task)}>✏ Edit</button>
                    </>
                    )}
                    </li>

            ))}
        </ul>
        
    </div>
);
}
export default TaskManager;