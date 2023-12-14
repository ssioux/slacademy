import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/images/palmAlone.png";
import "./navbar.scss";
import { MDBIcon } from 'mdb-react-ui-kit';

function NavBar() {

  return (
    <>
    <section className='nav'>
<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark" style={{backgroundColor: "red"}}>
      <Container>
        <Navbar.Brand href="#home"><img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}SLAcademy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">INICIO</Nav.Link>
            <NavDropdown title="SOBRE NOSOTROS" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">NUESTRO EQUIPO</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                GALERIA
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              INFORMACIÓN UTIL
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="CURSOS DE INGLES" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CURSOS ONLINE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                CLASES PRESENCIALES
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> <MDBIcon  color='secondary' fas icon='envelope'/>{" "}CONTACTANOS</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <a href='https://www.facebook.com/SiquijorLanguageAcademy/' target="_blank" rel="noopener noreferrer" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://www.instagram.com/siquijorlanguageacademy/?hl=es' target="_blank" rel="noopener noreferrer" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>

          <a href='https://api.whatsapp.com/send/?phone=34601502057&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='whatsapp' />
          </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
    </>
   
  )
}

export default NavBar
