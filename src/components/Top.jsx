import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import sorttwo from '../assets/img/sort-2.png'
import sortfour from '../assets/img/sort-4.png'

const Top = () => {
  return (
    <>
    <Navbar className="navbar navbar-expand-lg  navbar-fixed-top ">
      <Container>
        <Navbar.Brand href="#home">
          <div className="d-flex align-items-center ">
          <i class="fa-solid fa-bars"></i>
          <h1 className='ms-3'>Movies</h1>
          </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            
            <div className="rightnav">
              <input type="search" name="" id=""  placeholder='  Search Movie'/>
              <i className="fa-regular fa-bell text-light fs-2"></i>
              <i className="fa-regular fa-envelope fs-1 p-2 text-light" style={{backgroundColor:"#222427",borderRadius:"50%"}}></i>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="Filter">
      <div className="leftfilter">
        <div className='d-flex align-items-center'><h6>Release Date </h6><i className="fa-solid fa-angle-down ms-1"></i></div>
        <div className='d-flex align-items-center'><h6>Filters </h6><i className="fa-solid fa-angle-down ms-1"></i></div>
      </div>
      <div className="rightfilter">
        <img src={sorttwo} alt="err" />
        <img src={sortfour} alt="err" />
      </div>
    </div>
    </>
    
  )
}

export default Top