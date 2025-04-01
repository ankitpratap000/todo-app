import { useState } from "react";

 function Joke(){
    const[joke,setJoke]= useState("");
    const getJoke = async () =>{
        try{
            const response =await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();
            setJoke(data);
        }catch(error){
            console.error("error fetching joke:",error);
        }
    };

    return(
        <div style={{textAlign:"center", marginTop:"50px"}}>
      <h2>Joke App</h2>
      <button onClick={getJoke}>Get a Joke</button>
      {joke && (
        <div>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            </div>
      )}
      
    </div>
  );
 }
export default Joke;