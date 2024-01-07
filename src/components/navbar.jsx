import '../App.css';
import {useNavigate } from "react-router-dom"





function Navbar() {
  const history = useNavigate();
  return (<div className='navbar'>
  <h1 className ="i1">TO-DO</h1>
   <h1 className ="i2" onClick={()=>history("/")}>HOME</h1>
   <h1 className ="i3" onClick={()=>history("/login")}>LOGIN</h1>
  <h1 className ="i4" onClick={()=>history("/register")}>REGISTER</h1>
  </div>
    
  )
  }

export default Navbar;