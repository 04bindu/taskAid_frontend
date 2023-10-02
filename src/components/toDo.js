import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const toDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className="toDo">
        <div className='text'> {text} </div>
        <div className='icons'>
            <BiEdit className='icon updIcon' onClick={updateMode}/>
            <AiFillDelete className='icon delIcon' onClick={deleteToDo}/>
        </div>
    </div>
  )
}

export default toDo