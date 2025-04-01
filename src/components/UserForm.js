import React,{useState} from "react";
function UserForm(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[submittedData,setSubmittedData]=useState(null);
    const[errors,setErrors]=useState({});

    const handleSubmit = (e) =>{
        e.preventDefault();

        let newErrors={};// store the temporary errors
        if(!name.trim()){
            newErrors.name="name is required";
        }

        if(!email.trim()){
            newErrors.email="email is required";
        }
        // if there is error ,prevent submission
        if(Object.keys(newErrors).length>0){
            setErrors(newErrors);
            return;
        }
        // if no errors ,submit the data 
        setSubmittedData({name,email});
        setErrors({});

        setName("");
        setEmail("");
    };
    return(
        <div>
            <form onSubmit ={handleSubmit}>
                {/* e.preventDefault();// prevents page refresh
                alert(`Name :${name}\nEmail:${email}`);// shows entered data
                setSubmittedData({name,email}); */}
                
              
            
                <input 
                type="text" 
                placeholder="enter your name"
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                    />

                    {/* show error if name is empty */}
                   { errors.name && <p style ={{color:"red"}}>{errors.name}</p>}
                 
                 <input
                type="text"
                placeholder="enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                    /> 

                    {/* show error if email is empty      */}
                    {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                <button type="submit">Submit</button>  
                    
            </form>
             {/* show submitted data if only available */}
            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p><strong>Name:</strong>{submittedData.name}</p>
                    <p><strong>Email:</strong>{submittedData.email}</p>
           
        </div>
         )}
         </div>
    );
}
export default UserForm;
