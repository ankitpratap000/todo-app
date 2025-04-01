import React, { useState } from "react";

function Todolist() {
    const [tasks, setTasks] = useState([]);  // Store the list of tasks
    const [task, setTask] = useState("");  // Store the current task (editing task)
    const [editingIndex, setEditingIndex] = useState(null);  // Track the index of task being edited

    // Function to handle task editing
    const editTask = (index) => {
        setEditingIndex(index);  // Set the task index being edited
        setTask(tasks[index]);   // Set the current task text in the input field
    };

    // Function to save the edited task
    const saveTask = () => {
        if (editingIndex !== null) {
            let updatedTasks = [...tasks];  // Copy the tasks array
            updatedTasks[editingIndex] = task;  // Replace the task at the editing index
            setTasks(updatedTasks);  // Update the tasks state
            setEditingIndex(null);   // Exit editing mode
            setTask("");  // Clear the input field
        }
    };

    return (
        <div>
            <h2>TO-DO List</h2>
            <input
                type="text"
                placeholder="Enter your task"
                value={task}
                onChange={(e) => setTask(e.target.value)}  // Update the task input field
            />
            <button onClick={editingIndex === null ? 
                () => {
                    if (task.trim() !== "") {
                        setTasks([...tasks, task]);  // Add new task to list
                        setTask("");  // Clear input
                    }
                } : saveTask}>
                {editingIndex === null ? "Add Task" : "Save"}  {/* Toggle between Add/Save */}
            </button>

            {/* Display tasks list */}
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}  // Update input while editing
                                />
                                <button onClick={saveTask}>💾 Save</button>  {/* Save the edited task */}
                            </>
                        ) : (
                            <>
                                {t}  {/* Display task text */}
                                <button onClick={() => editTask(index)}>✏️ Edit</button>  {/* Edit task */}
                                <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>
                                    ❌ Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;
