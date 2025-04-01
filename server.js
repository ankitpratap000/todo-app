const express = require ("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let tasks =[
    { id:1, text: "learn react", completed:true},
    { id:2, text:"learn backend",completed:false}
];

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
    const newTask = { id: tasks.length + 1, text: req.body.text, completed: false };
    tasks.push(newTask);
    res.json(newTask);
});
app.put("/tasks/:id",(req,res)=>{
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if(task){
        task.completed = req.body.completed;
        res.json(task);
    } else{
        res.status(404).json({error: "task not completed"});
    }

});

app.delete("/tasks/:id",(req,res)=>{
    tasks = tasks.filter(t => t.id!== parseInt(req.params.id));
    res.json({meassage:"tasks deleted"});
});

const PORT = 5000;
app.listen(PORT, () =>console.log(`server running on port${PORT}`));