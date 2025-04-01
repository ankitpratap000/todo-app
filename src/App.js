// import React from "react";
// // import Greeting from "./components/Greeting";
// // import Message from "./components/Message";
// // import LikeButton from "./components/LikeButton";
// // import UserInput from "./components/UserInput";
// // import Project1 from "./components/Project1";
//   //  import UserForm from "./components/UserForm";
 
//   // import MyForm from "./components/MyForm";
  
//   import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
//   import NotFound from "./components/NotFound";
//   import Product from "./components/Product";
//   import Laptops from "./components/Laptops";
//   import Mobiles from "./components/Mobiles";

//   function Home() {
//     return <h2>🏠 Welcome to the Home Page!</h2>;
//   }
  
//   function About() {
//     return <h2>ℹ️ Welcome to the About Page!</h2>;
//   }
  
//   function Contact() {
//     return <h2>📞 Welcome to the Contact Page!</h2>;
//   }

// function App(){
//   return (
//     <Router>
//     <div>
//     <nav>
//           <ul>
//             <li><Link to="/">🏠 Home</Link></li>
//             <li><Link to="/about">ℹ️ About</Link></li>
//             <li><Link to="/contact">📞 Contact</Link></li>
//             <li><Link to="/products">🛒 Products</Link></li>
//           </ul>
//         </nav>


//           {/* Display Page Content Here */}
//           <div style={{ padding: "20px", border: "1px solid black" }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />

//             <Route path="/products" element={<Product />}>
//           <Route path="laptops" element={<Laptops />} />
//           <Route path="mobiles" element={<Mobiles />} />
//         </Route>

//             <Route path="*" element={<NotFound />} />
            
//           </Routes>
//         </div>
      
//      {/* <h1> welcome to React</h1> */}
//      {/* <Greeting/>
//       <Message/>
//       <LikeButton/>
//       <UserInput/> */}
//       {/* <Project1/> */}
//       {/* <UserForm/> */}
//       {/* <Todolist/> */}
//       {/* <MyForm/> */}

//     </div>
//     </Router>
//   );
// }
// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// // import Users from "./components/Users";
// // import NotFound from "./components/NotFound";
// import Jokes from "./components/Jokes";
// import Users from "./components/Users";
// import Register from "./components/Register";

// function App(){
//   return(
//     <Router>
//       <nav>
//         <ul>
//         {/* <li><Link to="/user/101">👤 User 101</Link></li>
//         <li><Link to="/user/202">👤 User 202</Link></li>
//          */}
//           <li><Link to="/">🏠 Home</Link></li>
//           <li><Link to="/jokes">🤣 Random Jokes</Link></li>
//           <li><Link to="/users">👥 Users</Link></li>
//           <li><Link to="/register">📝 Register</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         {/* <Route path="/user/:id" element={<Users />} />
//         <Route path="*" element={<NotFound />} /> */}
//         <Route path="/jokes" element={<Jokes />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   )
// }
// export default App;


// import React from "react";
// // import Register from "./components/Register";
// // import TaskManager from "./components/TaskManager";
// import NotesApp from "./components/NotesApp";


// function App() {
//   return (
//     <div>
//       {/* <h1>Simple Registration Form</h1> */}
//       {/* <Register /> */}
//       {/* <TaskManager/> */}
//       <h1>notes app</h1>
//       <NotesApp/>
//           </div>
//   );
// }

// export default App;

// import Apidata from "./components/Apidata";

// function App(){
//   return (
//     <div>
//       <h1>My React API Project </h1>
//       <Apidata/>
//     </div>
//   );
// }
// export default App;


// import Weather from "./components/Weather";
// import Joke from "./components/Joke";
// import Advice from "./components/Advice";
// import Image from "./components/Image";
// import User from "./components/User";
// import Counter from "./components/Counter";
// import Login from "./components/Login";
// import UserList from "./components/UserList";


// function App() {
//   return (
//     <div>
//       {/* <Weather /> */}
//       {/* <Joke/> */}
//       {/* <Advice/> */}
//       {/* <Image/> */}
//       {/* <User/> */}
//       {/* <Counter/> */}
//       {/* <Login/> */}
//       <h1>Welcome</h1>
//       <UserList/>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask,setNewTask] = useState("");

//   useEffect(() => {
//     console.log("Fetching tasks..."); // ✅ Log before fetch
  
//     fetch("http://localhost:4000/tasks")
//       .then((res) => {
//         console.log("Response status:", res.status); // ✅ Log response status
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Fetched tasks:", data); // ✅ Log received data
//         setTasks(data);
//       })
//       .catch((err) => console.error("Fetch error:", err)); // ✅ Log any errors
//   }, []);
  
//   const addTask =() =>{
//     fetch("http://localhost:4000/tasks",{
//       method:"POST",
//       headers : {"Content-Type":"application/json" },
//       body:JSON.stringify({task:newTask}),
//     })
//     .then((res)=>res.json())
//     .then((data)=>setTasks(data.tasks))
//     .catch((err)=>console.log("fetch error:",err));

//     setNewTask(""); 
//   };

//   return (
//     <div>
//       <h1>Task List</h1>
//       <ul>
//       {/* {tasks.length > 0 ? ( */}
//          { tasks.map((task, index) => (
//             <li key={index}>{task}</li>
//           ))}
//       </ul>
//       <input 
//       type="text"
//       value = {newTask}
//       onChange = { (e)=>setNewTask(e.target.value)}
//       placeholder="enter a new task"
//       />
//       <button onClick={addTask}>Add Task</button>

//     </div>
//   );
// }

// export default App;

// 

import Playlist from "./components/Playlist"; 

function App() {
  return (
    <div>
      <h1>Music Playlist</h1>
      <Playlist />
    </div>
  );
}

export default App;
