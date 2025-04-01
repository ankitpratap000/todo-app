import React, {useState,useEffect} from "react";
function Api(){
    const[posts,setPosts]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                let response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok){
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                let data = await response.json();
                setPosts(data);
            } catch(err){
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    
    },[]);
    if (loading) return <p>Loading...</p>
    if(error)  return <p style ={{ color:"red"}}>Error:{error}</p>;

    return (
        <div>
            <h2>API Fetched Posts</h2>
            <ul>
                {posts.map((post)=>(
                    <li key ={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
               ))}
            </ul>
        </div>
    );
}
export default Api;
