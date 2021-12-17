import React from 'react'
import assignmentwriting from '../assets/img/assignment-Writing.png'
import {Navbar,NavDropdown,Container,Nav,Form,FormControl,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'



export default function Header() {
    return (
        <div>
            <div id="header-top-bar" className="primary-bg sticky-top py-2">
  <div className="container">
    <div className="row justify-content-between  sticky-top align-items-center">
      <div className="col-md-9 col-lg-9 d-none d-md-block d-lg-block">
        <div className="topbar-text text-white text-center">
          <ul className="list-inline">
            <li className="list-inline-item"><i className="fa fa-map-marker text-light mr-1" /> UNITED
              KINGDOM</li>
            <li className="list-inline-item"><i className="fa text-light fa-envelope mr-1" />
              THEASSIGNMENTWRITING12@GMAIL.COM</li>
            <li className="list-inline-item"><i className="fa text-light fa-whatsapp mr-1" />
              0015167383453/00447429125487</li>
          </ul>
        </div>
      </div>
      <div className="col-md-2 col-lg-2">
        <div className="topbar-text text-white">
          <a href="/contact-us.php" className="btn btn-pills pink ">CONTECT US</a>
        </div>
      </div>
    </div>
  </div>
</div>
{/*topbar end*/}

  <Navbar bg=""  className='pink stick sticky-top' expand="lg">
  <Container>
    <Navbar.Brand href="/" >
      <a to="/app.js"><img className="ml--5" src={assignmentwriting} width="100%" height="70" alt="" /></a>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <Link to="/"><Nav.Link href="/action2"  className=' ml-1'>Home</Nav.Link></Link>

          <Link to="/"><NavDropdown title="Services" id="navbarScrollingDropdown"  className='ml-2 '>
            
            <div className='assignment'>
          <Link to="/philosophy"><NavDropdown.Item href="/action1">PHILOSOPHY ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action2">PTHYSICS ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action3">PROGRAMMING ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action4">SOCIOLOGY ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action5">STATISTICS ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action6">NURSING ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action7">MANAGEMENT ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action8">COMPUTER SCIENCE ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action9">BUSSINESS ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action10">ACCOUNTING SCIENCE ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action11">FINANCE SCIENCE ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action12">ECONOMICS SCIENCE ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action13">HISTORY SCIENCE ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action14">GEOGRAPHY SCIENCE ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action15">LAW  ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action16">CHEMISTRY ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action17">MATH ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action18">IT  ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action19">ENGINEERING  ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action20">ENGLISH  ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action21">BIOLOGY  ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action22">MARKETING  ASSIGNMENT</NavDropdown.Item></Link>
          <Link to="/"><NavDropdown.Item href="/action23">LINGUISTICS  ASSIGNMENT</NavDropdown.Item></Link>
          </div>
          
        </NavDropdown></Link>

        <Link to="/contact"><Nav.Link href="/action24"  className='mr-3 ml-3'>Contact</Nav.Link></Link>
        <Link to="/samples"><Nav.Link href="/action25"  className='mr-3'>Sample</Nav.Link></Link>
        <Link to="/"><Nav.Link href="/action26"  className='mr-3'>Reviews</Nav.Link></Link>
        <Link to="/faq"><Nav.Link href="/action27"  className='mr-3'>FAQS</Nav.Link></Link>
        <Link to="/about"><Nav.Link href="/action2"  className='mr-3'>About Us</Nav.Link></Link>

      
      
      </Nav>
      <Form className="d-flex">
        <FormControl
        size='sm'
          type="search"
          placeholder="Search"
          className="mr-2 pink dd"
          aria-label="Search"
          // style={{backgroundColor: "rgba(0,0,0,.03)"}}
        />
        
      </Form>
       <a href="/" className='btn btn-pill text-light primary-bg  px-4 ml-4'> Search</a>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}