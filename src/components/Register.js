import React ,{useState} from "react";
import "./Register.css";

function Register(){
    // state to store form data
    const[formData,setFormData]= useState({
        name:"",
        email:"",
        password:"",
    });

    // state to store messages 
    const[message,setMessage]=useState("");
    // handle i/p changes
    const handleChange = (e) => {
        setFormData({
          ...formData, // Keep previous data
          [e.target.name]: e.target.value, // Update changed field
        });
      };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setMessage("submitting...");
        try{
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                {
                    method:"POST",
                    headers:{
                        "content-Type":"application/json",
                    },
                    body:JSON.stringify(FormData),
                }
            );
            if(response.ok){
                const data = await response.json();//get response data
                setMessage(`✅ Registration successful! ID: ${data.id}, Name: ${data.name}`);
                setMessage("✅ Registration successful!");
                setFormData({name:"",email:"",password:""});
            }else{
                setMessage("❌ Registration failed. Try again.");
            }
        }catch (error){
            setMessage("❌ Network error. Try again later.");
        }
    };

    return(
        <div>
           <h2>📝 Register</h2>
            {message && <p>{message}</p>} {/* Display success/error message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
        