import React, {useState} from "react";
function Image(){
    const[image,setImage]=useState("");
    const getImage = async ()=>{
        try{
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setImage(data.message);
        }catch(error){
            console.log("error",error);
        }
    };

    return (
        <div style={{textAlign:"center",marginTop:"20px"}}>
            <h2>Random  Generator</h2>
            <div style={{textAlign:"center"}}>
            <button onClick={getImage} style={{padding:"20px"}}>Get Image</button>
            <img src={image} alt ="random Dog" width ="300px"/>
        </div>
        </div>
    );
}
export default Image;