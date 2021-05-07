import React from 'react';
import { Nav, NavDropdown, Navbar,Card,Form ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavB.css';
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
            <Nav.Link eventKey="link-1">Register Now</Nav.Link>
          </Nav.Item>
          <Nav.Item bg="dark" expand="lg" className="mr-auto" id="basic-navbar-nav">
            <NavDropdown href="#link" title="Dropdown" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>


            </NavDropdown>

          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Language" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">QAR Qatar Riyal</NavDropdown.Item>

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
    <Card.Title>Track Order</Card.Title>
  
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
    </div>
  )
}

export default NavB;
