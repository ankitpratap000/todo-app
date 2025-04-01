import React,{useState} from "react";

function Project1(){
    const[name,setName]=useState("");
    const[likes,setLikes]=useState(0);
    return(
        <div>
            <h2>Enter your Name:</h2>
            <input type="text" value={name} onChange ={(e)=>setName(e.target.value)}
            
            />
             <h2>Hello {name}!</h2>
            <h2>Likes:{likes}</h2>
            <button onClick={() => setLikes(likes + 1)}>{'\u{1F44D}'}</button>
            {likes>=5 && <p>Thank you</p>}
            <button onClick={()=>setLikes(Math.max(0,likes-1))}>👎</button>
            <button onClick={()=> {setName("");setLikes(0);}}>🔄 Reset</button>
            <button onClick={() =>{
                if(likes + 1 === 10){
                    alert("wow! 10 likes");
                }
              setLikes(likes+1);
            }}>
            👍
            </button>
        </div>
    );
}
export default  Project1;