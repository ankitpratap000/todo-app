import React,{ useState,useEffect } from "react" // importing hooks
function Jokes(){
    const[joke,setJoke]=useState("");
    const[loading,setLoading]=useState(true);//loading state
    // function to fetch joke
    const fetchJoke=async ()=>{
        setLoading(true);// show loading before fetching
        try{
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const data=await response.json();
            setJoke(data.value);// save the joke in state

        } catch(error){
            console.error("error fetching joke:",error);
        }
        setLoading(false);

};
// fecth joke when component laods
useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div>
         <h2>🤣 Random Joke Generator</h2>
      {loading ? <p>Loading...</p> : <p>{joke}</p>}
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );

}
export default Jokes;