import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="container">
            <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand"><b>The Hindu</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/"><b>Add</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/View"><b>View</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Search"><b>Search</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Delete"><b>Delete</b></a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
            </div>
        </div>
    )
}

export default Navbar