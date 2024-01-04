import { useState,useEffect } from "react";

import '../App.css';
import Navbar from "../components/navbar";
import Todoitem from "../components/todoitem";
import {alo} from "./login";





function Home() {
    const [todo, setTodo] = useState(null)

    useEffect( ()=>{
        
        const fetchtodo  = async ()=>{
        const response = await fetch ('/659454020e7fb2e3f6f97b42')
        const json = await response.json()
        

        if(!response.ok){
            console.log(json.error)  
           
           }
        if(response.ok){
         setTodo(json.mssg)  
         
        }
        }
        fetchtodo()
        
        })
    

    return( <div>
    <Navbar />
    <div className="inputbar">

    <input type="text" ></input>
    <button>ADD</button>
    </div>
    <div className="todolist">

    {   todo && todo.map((item)=>{ 
        return <Todoitem 
        item ={item}
    />

    })}




   

    </div>
    
    
    </div>
        

        
        
)

}

export default Home;