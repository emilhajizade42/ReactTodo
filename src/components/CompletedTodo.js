import React, { useContext } from 'react'
import { TodoContext } from '../App'
import Navbar from '../layouts/Navbar'

function CompletedTodo() {
  
  const {first,setfirst} = useContext(TodoContext)
  let data =  first.filter((item)=>item.done == true)

  return (
    <div>
        <Navbar/>
        
        <h1 className='mt-3 text-light'>CompletedTodo</h1>
            <table className="table table-dark mt-5 container">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">ADD DONE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>(
                        <tr key={index+1}>
                            <th scope="row">{index+1}</th>
                            <td>{item.text}</td>
                            <td><input type={"checkbox"}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>    
    </div>
  )
}

export default CompletedTodo