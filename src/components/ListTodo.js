import React from 'react'
import Navbar from '../layouts/Navbar'

function ListTodo() {
    return (
        <div>
            <Navbar></Navbar>
            ListTodo
            <table class="table table-dark mt-5 container">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">State</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <th scope="row">1</th>
                        <td>Go run 20km</td>
                        <td><input type={"checkbox"}/></td>
                        <td><button className='btn btn-danger' onClick={()=>{alert("Deleted")}}>DELETE</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo