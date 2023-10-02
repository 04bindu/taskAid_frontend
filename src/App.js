import {useEffect, useState} from 'react';
import ToDo from "./components/toDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from './utils/handleApi';


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1> What are you upto today? </h1>

        <div className="top">
          <input type="text" placeholder="Tasks tasks and tasks..." value={text} onChange={(e) =>setText(e.target.value)} />
          <div className="add" onClick={(isUpdating ? () => updateToDo(toDoId, text, setText, setToDo, setIsUpdating) : () => addToDo(text, setText, setToDo))}> 
            {isUpdating? "Update" : "Add"} 
          </div>
        </div>
        
        <div className="list">

            {toDo.map((item) => <ToDo 
            key = {item._id} 
            text = {item.text}
            updateMode = {() => updateMode(item._id, item.text)}
            deleteToDo = {() => deleteToDo(item._id, setToDo)}
            />)}

        </div>

      </div>
    </div>
  );
}

export default App;
