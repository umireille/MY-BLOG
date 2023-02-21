 import { Link ,useNavigate } from "react-router-dom";
import "./login.css";
import TopBar from "../../topbar/TopBar";
import { useRef, useState, useEffect, useContext} from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "axios"
const LOGIN_URL ="https://blogapi12.onrender.com/api/v1/signin"
 export default function Login() {

 const {setAuth} = useContext(AuthContext);
  const userRef= useRef();
const errRef = useRef();
 
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [errMsg,setErrMsg]=useState('');
const [success,setSuccess]=useState(false);

// useEffect(() =>{
//   userRef.current.focus();
// },[])

useEffect(() =>{
  setErrMsg('');
},[email,password])


const navigate =useNavigate();
const handleSubmit =async (e) =>{
  e.preventDefault(); 
  // console.log(user,password);

  try {
    const response = await axios.post(LOGIN_URL,
      JSON.stringify({email,password}),{
        headers:{"Content-Type": "application/json"},
        // withCredentials:true
      });
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      localStorage.setItem("token",accessToken);
      
      setAuth({email ,password, accessToken});
    setEmail('');
    setPassword('');
    navigate("/dashboard")
    // setSuccess(true);
   
    
  } catch (err){
if(!err?.response){
  setErrMsg("No Server Response");
}
else if(err.response?.status ===400){
  setErrMsg("Missing Email or Password");
}
else if (err.response?.status ===401){
  setErrMsg("Unauthorized");

}
else  {
setErrMsg("Login Failed");
}errRef.current.focus();

  }

}
   return (
    <>
    <TopBar/>
    {success ?(
      <section>
     
      </section>
      ):(


     <section>
 <div className="login">
  
      <p ref={errRef} className={errMsg? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
      <div className="card ">
     <span className="loginTitle">Login</span>
      
       <form onSubmit={handleSubmit} className="loginForm">
        <label>Email</label>
 <input type="text" className="loginInput" placeholder="Enter your email"
 ref={userRef}
 autoComplete="off"
 onChange={(e) =>setEmail(e.target.value)}
 value={email}
 required
 />
 <label>Password</label>
 <input type="password" className="loginInput" placeholder="Enter your password"
 onChange={(e) =>setPassword(e.target.value)}
 value={password}
 required/>
     
       <button className="loginButton">Login</button>
       </form>
     
      
     </div>
     <p>
        Need an Account?<br/>
        <span className="line"></span>
      
       </p>
       <Link to ="/signup" className="loginSignupButton">Signup</Link>
     </div>
     </section>
    
      )}
      </>
      )}
   
 