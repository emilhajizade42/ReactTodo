import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className='nav-link' to={"/"}>home</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to={"/list"}>list</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
        
        
    </div>
  )
}

export default Navbar