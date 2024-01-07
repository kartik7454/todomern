import '../App.css';
import { useState } from "react";
import Navbar from "../components/navbar";
import {useNavigate } from "react-router-dom"


   

function Register() {
    const history = useNavigate()
    const [visi    ,setvisi] = useState(false)

    const handleSubmit= async (e)=>{
    
        e.preventDefault()
        
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        const logincred ={email,password}
        
    
         const response = await fetch('/register',{
             method:"POST",
             body :JSON.stringify(logincred),//convert to json from object
             headers:{
                 'Content-Type':'application/json'
             }
         })
         const json = await response.json()
         if (!response.ok){
             console.log(json.error)
             setvisi("true")
            
         }
         if (response.ok){
        
          
            history("/login")
            
         }
       }




    return(<div><Navbar />

    <form onSubmit={handleSubmit}>
    <div className="register">
<div><h1>register</h1></div>
<div><label>email</label></div>
    <input type="email" placeholder="e-mail" id= "email"  required></input>
    
    <div><label>password</label></div>
    <div><input type="password" placeholder="password" id ="password" required></input>
    </div>
    <br></br>
    <div><button>submit</button></div>
    </div></form>

    <div className= {"errormssg " + (visi ? 'show' : 'hidden')}><h3>email already exists</h3></div>
    </div>
      
     
     
)

}

export default Register;