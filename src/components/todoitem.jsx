import '../App.css';






function Todoitem(props) {

  return (<div className='todoitembox'>
  <input type="checkbox" className='todocheck'></input>
  <h3 className='todoitem'>{props.item}</h3>
  <hr></hr>
  </div>
    
  )
  }

export default Todoitem ;