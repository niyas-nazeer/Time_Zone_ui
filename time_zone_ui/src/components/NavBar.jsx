import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand ms-5" href="">Time Zone</a>
    
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-secondary"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto me-auto">
                <a className="nav-link me-4" href="#men">MEN</a>
                <a className="nav-link me-4" href="#women">WOMEN</a>
                <a className="nav-link me-4" href="#brands">BRANDS</a>
                <a className="nav-link me-4" href="#offers">OFFERS</a>
              </div>
              <div>
                <form className="d-flex" role="search" id="form">
                  <div className="input-group me-3">
                        <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        />
                        <button
                        className="btn me-2"
                        id="search-btn"
                        type="submit"
                        aria-label="Search"
                        >
                        <i className="bi bi-search"></i>
                        </button>
                  </div>
                  
                  <div id='icondiv'>
                    <a href=""><i className="bi bi-person nav-icon me-4" aria-label="Profile"></i></a>
                  </div>
                  <div id='icondiv'>
                    <a href=""><i className="bi bi-heart nav-icon me-4" aria-label="Favorites"></i></a>
                  </div>
                  <div id='icondiv'>
                    <a  href=""><i className="bi bi-bag nav-icon" aria-label="Cart"></i></a>
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </nav>
      )
}

export default NavBar