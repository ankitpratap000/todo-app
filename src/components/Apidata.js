import React, {useState,useEffect} from "react";

function Apidata(){
    const[posts,setPosts] = useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
         fetch("https://jsonplaceholder.typicode.com/posts")
         .then((response)=>response.json())
         .then((data)=>{
            setPosts(data);
            setLoading(false);
         })
         .catch((err)=>{
            setError(err.message);
            setLoading(false);
         });
         
    },[]);


    if(loading) return <p>Loading ...</p>;
    if (error) return <p>Error:{error}</p>;
    return (
        <div>
            <h2>API Fetched Posts</h2>
            <ul>
                {posts.slice(0,5).map((post)=>(
                    <li key ={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Apidata;