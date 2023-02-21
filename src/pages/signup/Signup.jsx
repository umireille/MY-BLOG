 import "./signup.css"
 import { Link  } from "react-router-dom";
 import TopBar from "../../topbar/TopBar";
 import { useRef,useState, useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 import axios from "axios";

 const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

const SIGNUP_URL = "https://blogapi12.onrender.com/api/v1/signup";
 export default function Signup() {

  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
 
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [PasswordFocus, setPasswordFocus] = useState(false);
  
  const [matchpwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);
  
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
 
  useEffect(() =>{
    userRef.current.focus();
  }, [])

  useEffect(() =>{
    const result = USER_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result);
  }, [name])
 
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchpwd;
    setValidMatchPwd(match);
  }, [password, matchpwd])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email])

  useEffect(() =>{
    setErrMsg('');
  }, [name, password])

 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const v1 = USER_REGEX.test(name);
    const v2 = PWD_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    if(!v1 || !v2 || !v3){
      setErrMsg("Invalid Entry");
      return;
    }
    
    try{
      const response = await axios.post(SIGNUP_URL,
        JSON.stringify({name, password, email}),
        {
          headers:{"Content-Type": "application/json"}
        }
        );
        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.stringify(response));
       navigate("/login")
        // setSuccess(true);
        
    } catch(err){
      if(!err?.response){
        setErrMsg('No Server Response');
      } else if(err.response?.status === 409){
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }

    }

  }

  return (
    <>
    <TopBar/>

<section>
     <div className="signup">
     <div className="card ">
      <span className="signupTitle">Signup</span>
      <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>

       <form className="signupForm" autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>

 <input
  id="email"
 onChange={(e) => setEmail(e.target.value)}
 name="name"
  arial-invalid={validEmail ?"false":"true"}
  arial-describedly="emailnote" 
  onFocus={() =>setEmailFocus(true)}
  onBlur={() => setEmailFocus(false)}
  //  className="signupInput" 
  placeholder="Enter your email"/>
  <p id="emailnote" className={emailFocus && !validEmail ? "instructions":"offscreen"}>email is not valid</p>

 <label>Password</label>
 <input type="password" 
 id="password"
 name="password"
 onChange={(e) => setPassword(e.target.value)}
 arial-invalid={validPassword ? "false":"true"}
 arial-describebly="pwdnote"
 onFocus={() => setPasswordFocus(true)}
 onBlur={() => setPasswordFocus(false)}
  // className="signupInput" 
  placeholder="Enter your password"/>
  <p id="pwdnote" className={PasswordFocus && !validPassword ? "instructions":"offscreen"}>Must include uppercase and lowercase letters</p>
 <label htmlFor="username">Username</label>
 <input
 className={validName ? "input-valid": "input-notvalid"}
  type="text"
  name="name" 
  ref ={userRef} 
  autoComplete="off"
  onChange={(e) => setName(e.target.value)}
  arial-invalid={validName ? "false":"true"}
  arial-describebly="uidnote"
 onFocus={() => setNameFocus(true)}
 onBlur={() => setNameFocus(false)}
    //  className="signupInput"
      placeholder="Enter your Username"/>
       <button className="signupButton">Signup</ button>
       </form>
      
      </div>
      <h1>Do you  have an account?</h1>
      <button className="signupLoginButton">
          <Link to="/login">Login</Link> </ button>       
     </div></section>
     
     </> 
   )
 }
