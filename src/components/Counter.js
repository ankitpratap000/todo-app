import React ,{useState} from "react";

function Counter (){
    const[count,setCount]= useState(0);

    return (
        <div style={{textAlign:"center"}}>
            <h2>Counter : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <br></br>
            <button onClick={()=>setCount(count-1)} style={{marginTop:"20px"}}>Decrease</button>
        </div>
    );
}
export default Counter;