import React from 'react';
import { Nav, NavDropdown, Navbar,Card,Form ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pop from './Pop';
function NavB() {
  return (
    <div className="NavB">

      <div>
        <Nav className="justify-content-left" activeKey="/home" >
          <Nav.Item>
            <Nav.Link href="/home" style={{ color: "gray" }} >AboutUs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" style={{ color: "gray" }}>Contacts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" style={{ color: "gray" }}>Track Orders</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-end" activeKey="/home" style={{ marginTop: "-3%" }}>
          <Nav.Item>
            <Nav.Link href="/home">Download App</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Register Now!</Nav.Link>
          </Nav.Item>
          <Nav.Item bg="dark" expand="lg" className="mr-auto" id="basic-navbar-nav">
            <NavDropdown href="#link" title="Currency" id="basic-nav-dropdown" >
            <NavDropdown.Item eventKey="4.1">QAR Qatar Riyal</NavDropdown.Item>
            

            </NavDropdown>

          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Language" id="nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              

            <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
   English
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
   Arabic
  </label>
</div>
            </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">Arabic</NavDropdown.Item> */}
              

            

            </NavDropdown>
          </Nav.Item>
        </Nav>
        <hr style={{ marginTop: "-0%" }} />


        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand"><img src="http://54.179.233.201:3000/images/logo.jpeg"></img></a>
            <form class="d-flex" style={{ marginRight: "50%" }}>
              <input class="form-control me-2" type="search" placeholder="Enter Keyword or Part Number" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>

              </form>
            
           <Pop />

<button type="button" class="btn btn-light "style={{marginLeft:"80%",marginTop:"-7%"}} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<text style={{color:"gray"}}>Shopping Cart</text><br/><b>QAR 0.00</b></button>

          </div>
        </nav>


        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "rgb(156, 9, 82)",fontSize:"15px"}} variant="dark" className="one">
          <Navbar.Brand href="#home" style={{ marginLeft: "10%", fontSize: "100%" }}><b>Home<br />
  My Gallery</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Navbar.Brand href="#home" style={{ fontSize:"18px" }}><b>Best Deals</b></Navbar.Brand>
              <Navbar.Brand >
                <NavDropdown style={{ fontSize:"18px",marginTop:"-10%" }} title="My Malls" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"><b>Malls</b></NavDropdown.Item>

                </NavDropdown>
              </Navbar.Brand>
            </Nav>
            <Nav>
              <Navbar.Brand href="#home" style={{fontSize:"18px",marginTop:"1%"}}><b>Jobs</b></Navbar.Brand>
              <Navbar.Brand >
                <NavDropdown style={{fontSize:"18px",marginTop:"-3%" }} title="Properties" id="collasible-nav-dropdown">


                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Navbar.Brand>
            </Nav>
            <Navbar.Brand href="#home"style={{fontSize:"18px" }}><b>Vehicles</b></Navbar.Brand>
            <Navbar.Brand href="#home" style={{fontSize:"18px" }}><b>Products</b></Navbar.Brand>
            <Navbar.Brand href="#home" style={{fontSize:"18px" }}><b>Services</b></Navbar.Brand>
            <Navbar.Brand href="#home" style={{fontSize:"18px" }}><b>News & Articles</b></Navbar.Brand>
            <Navbar.Brand href="#home"style={{fontSize:"18px" }}><b>My Directory</b></Navbar.Brand>


            <Navbar.Brand href="#home"style={{fontSize:"18px" }}><b>Call Us:800<br    />   060-0730</b></Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>

        

      </div>
      
<div className="container">
<div className="row">
  <div className="col-4"></div>
  <div className="col-4">
      <Card style={{ width: '24rem',height:'23rem',marginTop:"10%" }}>
  <Card.Body>
    <Card.Title><b>Track Order</b></Card.Title>
  <hr/>
    <Card.Text>
    Enter the order ID and email address that was used to create the order, and then click the track button.
    
    

                    </Card.Text>
                    <Form>
                    <Form.Group controlId="formGroupPassword">
    <Form.Label style={{marginLeft:"-80%"}}>Order ID</Form.Label>
    <Form.Control type="password" placeholder="Order ID"style={{backgroundColor:"rgb(221, 218, 218)",  border:"white"}} />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label style={{marginLeft:"-75%"}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="user@example.com" style={{backgroundColor:"rgb(221, 218, 218)",   border:"white"}} />
  </Form.Group><br/>
  <Button variant="primary"style={{backgroundColor:"rgb(156, 9, 82)",width:"100%",border:"white"}} type="submit">
   Track
  </Button>

 
</Form>   
  
  </Card.Body>
</Card>
</div>
<div className="col-4"></div>
</div>


    </div>


    <Navbar collapseOnSelect Information bg="dark" >
 <Nav >
 
   <div class="row">
    
     <div class="col-4" style={{color:"white",marginLeft:"10%"}}><b>Contact Us</b><br/>Hi, we are always open for cooperation and suggestions, contact us in one of the ways below:

Phone Number
    +974 (800) 010-01-10

Email Address
    support@mycommunity.qa

Our Location
    Retej Building, No.299, Doha, Qatar

Working Hours
    Sat-Thu 10:00pm - 7:00pm</div>
     
     <div class="col-2" style={{color:"white",marginLeft:"0%"}}><b>Information</b><br/>
     <button type="button" class="btn btn-dark">About Us</button><br/>
     <button type="button" class="btn btn-dark">Contact Us</button><br/>
     <button type="button" class="btn btn-dark">Register Now!</button><br/>
     <button type="button" class="btn btn-dark">Download App</button><br/>
     <button type="button" class="btn btn-dark">Delivery Information</button><br/>
     <button type="button" class="btn btn-dark">Privacy Policy</button><br/>
     <button type="button" class="btn btn-dark">Return Policy</button>
     </div>
     <div class="col-2"style={{color:"white",marginLeft:"-2%"}}><b>Quick Links</b>
     <br/>
     <button type="button" class="btn btn-dark">Best Deals</button><br/>
     <button type="button" class="btn btn-dark">Malls</button><br/>
     <button type="button" class="btn btn-dark">Products</button><br/>
     <button type="button" class="btn btn-dark">Services</button><br/>
     <button type="button" class="btn btn-dark">Vehicles</button><br/>
     <button type="button" class="btn btn-dark">Properties</button><br/>
     <button type="button" class="btn btn-dark">Jobs</button>
     </div>
     <div class="col-4"style={{color:"white",marginLeft:"65%",marginTop:"-22%"}}><b>Newsletter</b></div>
 
  
   </div>
   
 </Nav>
</Navbar>
    </div>
  )
}

export default NavB;
