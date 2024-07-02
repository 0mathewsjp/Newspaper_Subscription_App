import React from 'react'

const cardStyle={
    backgroundImage: 'url(https://wallpaperaccess.com/full/1848675.jpg)'
  };

const Delete = () => {
    return (
        <div>
            <div className="container">
            <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand"><b>Prime News</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/"><b>Add</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/View"><b>View</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Search"><b>Search</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/Delete"><b>Delete</b></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
                <div className="row" style={{ marginTop: '75px' }}>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card" style={{color:'lightgreen'}} >
                            <div class="card-body"style={cardStyle}>
                                <div className="row g-3">
                                    <div className="col col-sm-12 col-md-12 col-lg-12 col-x-12 col-xxl-12">
                                        <label htmlFor="" className="form-label"><b>Enter Subscriber Name</b></label>
                                        <input type="text" className="form-control" placeholder='Enter Name' />
                                    </div>
                                    <div className="col col-sm-12 col-md-12 col-lg-12 col-x-12 col-xxl-12">
                                        <button className="btn btn-success">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete