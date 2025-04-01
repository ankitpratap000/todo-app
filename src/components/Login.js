import React ,{useState} from "react";
function Login(){
    const[isLoggedIn,setIsLoggedIn] = useState(false);
    return (
        <div>
            {isLoggedIn ? <h2>Welcome ,user!</h2>: <h2>Please Login </h2>}
            <button onClick ={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
        </div>
    );
}
export default Login;