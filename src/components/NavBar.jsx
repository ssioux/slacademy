import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">SLAcademy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <NavDropdown title="ABOUT US" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">OUR TEAM</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                PHOTOS & VIDEO GALERY
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                USEFUL INFORMATION
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="COURSES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">ONLINE CLASS</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                FACE TO FACE CLASSES
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              BLOG
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>     

      
    </>
   
  )
}

export default NavBar
