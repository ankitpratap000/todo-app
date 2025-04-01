import React,{useState} from "react";
function UserInput(){
    const [name,setName] = useState("");
    return(
        <div>
            <h2>enter your name:</h2>
            <input type ="text" placeholder="Type your name.."
            value={name} onChange ={(e)=>setName(e.target.value)}
            />
            
            <h2>Hello,{name}!</h2>
        </div>
    );
}
export default UserInput;