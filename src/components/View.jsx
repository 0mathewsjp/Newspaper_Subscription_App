import React from 'react'

const cardStyle={
  backgroundImage: 'url(https://wallpaperaccess.com/full/1848675.jpg)'
};

const View = () => {
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
                  <a class="nav-link active" href="/View"><b>View</b></a>
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
        <div className="row" style={{ marginTop: '75px' }}>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card">
              <div class="card-body" style={cardStyle}>
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Sl No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Ph Number</th>
                          <th scope="col">Address</th>
                          <th scope="col">Pin Code</th>
                          <th scope="col">District</th>
                          <th scope="col">Email id</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Arjun Nair</td>
                          <td>9876543210</td>
                          <td>12 MG Road, Kochi</td>
                          <td>682001</td>
                          <td>Ernakulam</td>
                          <td>arjun@example.com</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Priya Menon</td>
                          <td>9123456789</td>
                          <td>34 Beach Rd, Thiruvananthapuram</td>
                          <td>695001</td>
                          <td>Thiruvananthapuram</td>
                          <td>priya@example.com</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Vishnu R</td>
                          <td>9012345678</td>
                          <td>56 Temple Rd, Kollam</td>
                          <td>691001</td>
                          <td>Kollam</td>
                          <td>vishnu@example.com</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Neha Pillai</td>
                          <td>8901234567</td>
                          <td>78 Lake View, Alappuzha</td>
                          <td>688001</td>
                          <td>Alappuzha</td>
                          <td>neha@example.com</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Anil Kumar</td>
                          <td>8790123456</td>
                          <td>90 Hill Top, Thrissur</td>
                          <td>680001</td>
                          <td>Thrissur</td>
                          <td>anil@example.com</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Sara Thomas</td>
                          <td>8679012345</td>
                          <td>101 Church St, Kottayam</td>
                          <td>686001</td>
                          <td>Kottayam</td>
                          <td>sara@example.com</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Rajesh Varma</td>
                          <td>8567901234</td>
                          <td>112 Park Ave, Kozhikode</td>
                          <td>673001</td>
                          <td>Kozhikode</td>
                          <td>rajesh@example.com</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Meera S</td>
                          <td>8456790123</td>
                          <td>123 Market St, Palakkad</td>
                          <td>678001</td>
                          <td>Palakkad</td>
                          <td>meera@example.com</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>Ajay Joseph</td>
                          <td>8345679012</td>
                          <td>134 Riverside, Kannur</td>
                          <td>670001</td>
                          <td>Kannur</td>
                          <td>ajay@example.com</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>Divya Mathew</td>
                          <td>8234567901</td>
                          <td>145 Hill View, Malappuram</td>
                          <td>676001</td>
                          <td>Malappuram</td>
                          <td>divya@example.com</td>
                        </tr>
                      </tbody>
                    </table>

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

export default View