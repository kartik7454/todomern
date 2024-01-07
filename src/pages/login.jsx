import '../App.css';
import { useState } from "react";
import Navbar from "../components/navbar";
import {useNavigate } from "react-router-dom"

var alo = null
function Login() {
    const history = useNavigate();
    const [visi    ,setvisi] = useState(false)

    const handleSubmit= async (e)=>{
    
        e.preventDefault()
        
        var email = document.getElementById("email2").value;
        var password = document.getElementById("password2").value;
        const logincred ={email,password}
        
    
         const response = await fetch('https://todobackend-ee9t.onrender.com/login',{
             method:"POST",
             body :JSON.stringify(logincred),//convert to json from object
             headers:{
                 'Content-Type':'application/json'
             }
         })
         const json = await response.json()
         if (!response.ok){
             console.log(json.error)
             setvisi("true")}
         if (response.ok){
        console.log("loggedin ")
            alo = json.mssg
            history("/")}
       }
return(<div><Navbar />
<form onSubmit={handleSubmit}>
    <div className="login">
<div><h1>login</h1></div>
<div><label>email</label></div>
    <input type="email" placeholder="e-mail" id= "email2"  required></input>
    
    <div><label>password</label></div>
    <div><input type="password" placeholder="password" id ="password2" required></input>
    </div>
    <br></br>
    <div><button>submit</button></div>
    </div></form>

    <div className= {"errormssg " + (visi ? 'show' : 'hidden')}><h3>email does not  exists</h3></div>
    </div>
)}

export {Login,alo} ;
