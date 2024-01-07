

import Navbar from "../components/navbar.jsx";
import Todoitem from "../components/todoitem.jsx";
import {alo} from "./login.jsx";
import { useState,useEffect } from "react";
import '../App.css';



function Home(id) {
    const [Todo, setTodo] = useState(null)

    useEffect( ()=>{
if(alo){const fetchtodo  = async ()=>{
           console.log(alo)
        const response = await fetch ('https://todobackend-ee9t.onrender.com/'+alo)
        const json = await response.json()
        
        

        if(!response.ok){
            console.log(json.error)  
           
           }
        if(response.ok){
         setTodo(json.mssg)  
         
        }
        }
        fetchtodo()}
        
        
        })

        const handleSubmit= async (e)=>{
            if (alo){ var proxytodo = {}
            var newitem = document.getElementById("addtodo").value;
            if(newitem!==""){proxytodo=Todo
             proxytodo.push(newitem)
            const response = await fetch('https://todobackend-ee9t.onrender.com/'+alo,{
                method:"PATCH",
                 body :JSON.stringify(proxytodo),//convert to json from object
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const json = await response.json()
         if (!response.ok){
             console.log(json.error)}
         if (response.ok){
  console.log("added ")
  document.getElementById("addtodo").value = ""
}}}
            
else{alert("please login")}
    
}


             async function deletefn(id){
               var yehwala =  Todo.filter((item,index)=>{ 
               return index !== id})
               
               console.log(yehwala)


               const response = await fetch('https://todobackend-ee9t.onrender.com/'+alo,{
                method:"PATCH",
                 body :JSON.stringify(yehwala),//convert to json from object
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const json = await response.json()
         if (!response.ok){
             console.log(json.error)}
         if (response.ok){
  console.log("updated ")}
             }
           
    

    return( <div>
    <Navbar />
    <div className="inputbar">

    <input type="text" id ="addtodo"></input>
    <button className="addbtn" onClick={handleSubmit}>ADD</button>
    </div>
    <div className="todolist">

    {/* {   Todo && Todo.map((item,index)=>{ 
       
        return <Todoitem 
        id={index}
        item ={item}
        deletefn={deletefn}
    />

    })} */
    Todo? Todo && Todo.map((item,index)=>{ 
       
       return <Todoitem 
       id={index}
       item ={item}
       deletefn={deletefn}
   />

   }): <h1>please login</h1>}




   

    </div>
    
    
    </div>
        

        
        
)

}

export { Home}  ;
