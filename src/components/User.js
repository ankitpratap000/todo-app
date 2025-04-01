import React ,{useState} from "react";
function User(){
    const[user,setUser]=useState({name:"",email:"",pic:""});
    const Userinfo = async ()=> {
        try{
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            const {name,email,picture} = data.results[0];
            setUser({
                name:`${name.first} ${name.last}`,
                email:email,
                pic: picture.large,
            });
            console.log(data);
        }catch(error){
            console.log("error",error);
        }
    };

    return (
        <div style = {{textAlign:"center",marginTop:"50px"}}>
            <h2>Random User </h2>
            <button onClick ={Userinfo} style={{padding:"10px",marginBottom:"20px"}}>Get UserInfo</button>
            {user.name && (
                <div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <img src={user.pic} alt="user" width="150px" style={{borderRadius:"50%"}}/>
                    </div>
            )}
        </div>
    );
}
export default User;