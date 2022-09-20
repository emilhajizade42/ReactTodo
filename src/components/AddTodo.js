import React, { useContext } from 'react'
import { TodoContext } from '../App'
import Navbar from '../layouts/Navbar'

function AddTodo() {
  const { first, setfirst } = useContext(TodoContext)
  function add(value) {
    setfirst([...first, {
      text:value,
      done:false
    }])
  }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <input className='mt-5 p-2 px-4 rounded-pill' type={"text"} placeholder={"Task ..."}></input>
      </div>
      <button onClick={(e) => { add(e.target.previousElementSibling.firstChild.value)}} className='btn btn-success mt-3'>AddTodo</button>
    </div>
  )
}

export default AddTodo