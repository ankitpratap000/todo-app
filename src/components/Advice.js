import React , {useState} from"react";
function Advice(){
    const[advice,setAdvice]= useState("");
        const getAdvice = async ()=>{
            try{
            const response = await fetch("https://api.adviceslip.com/advice");
            const data = await response.json();
            setAdvice(data.slip.advice);
        }  catch(error){
        console.log("error", error);
    }
};
return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h2>LIFE ADVICE </h2>
        <button onClick={getAdvice} style={{padding:"10px",margin:"10px"}}>GET ADVICE</button>
        <p>{advice}</p>
        <p><strong>By Ankit Pratap</strong></p>
    </div>
);
    
}
export default Advice;