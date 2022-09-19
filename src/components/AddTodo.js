import React, { useContext } from 'react'
import { TodoContext } from '../App'
import Navbar from '../layouts/Navbar'

function AddTodo() {
    const value = useContext(TodoContext)
  return (
    <div>
        <Navbar></Navbar>
        AddTodo {value}</div>
  )
}

export default AddTodo