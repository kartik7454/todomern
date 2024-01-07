import '../App.css';






function Todoitem(props) {

   function handelclick(id){
    props.deletefn(id)
   }

    function handelclickchk(id){
     var item= document.getElementById(id)
     item.classList.toggle("checked")
   
    }

  return (<div className='todoitembox'>
  <input type="checkbox" className='todocheck' onClick={()=>handelclickchk(props.id)}></input>
  <h3  id={props.id} className='todoitem'>{props.item}</h3>
  <button className ="deletebtn" onClick={()=>handelclick(props.id)}>X</button>
  <hr></hr>
  </div>
    
  )
  }

export default Todoitem ;