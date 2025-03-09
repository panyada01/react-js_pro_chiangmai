import React from 'react'

const DetailPerson = () => {
  return (
    <div>
   


  <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2>จังหวัดเชียงใหม่</h2>
          <p>
            Swap the background-color utility and add a `.text-*` color.
          </p>
          <button className="btn btn-outline-light" to="ChiangMai.jsx" type="button"> 
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="App-link disabled" href="ChiangMai.jsx" target="_blank" rel="noopener noreferrer" >
                  ดูเพิ่มเติม
                </a>
              </li>
              </ul>
          </button>
        </div>
      </div>
      
      <div className="col-md-6">
        <div className="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>จังหวัดน่าน</h2>
          <p>
            Or, keep it light and add a border for some added definition to.
          </p>
          <button className="btn btn-outline-secondary" type="button">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Nan.jsx">
                  ดูเพิ่มเติม
                </a>
              </li>
              </ul>
          </button>
        </div>
      </div>
    </div>

  </div>



  )
}

export default DetailPerson
