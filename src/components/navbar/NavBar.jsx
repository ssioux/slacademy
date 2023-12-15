import {
  MDBBtn,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu, MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler
} from "mdb-react-ui-kit";
import { useState } from "react";
import logo from "../../assets/images/palmAlone.png";
import "./navbar.scss";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            {" "}
            <img src={logo} height="30" alt="" loading="lazy" />
            SLAcademy
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNav} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <MDBNavbarLink aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"><MDBDropdown>
      <MDBDropdownToggle  color='dark' tag='a' >
        Dropdown link
      </MDBDropdownToggle>
      <MDBDropdownMenu dark>
        <MDBDropdownItem link>Action</MDBDropdownItem>
        <MDBDropdownItem link>Another action</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown></MDBNavbarLink>

                

              </MDBNavbarItem>
            </MDBNavbarNav>

            <MDBNavbarNav className="d-flex flex-row w-auto mb-2 ">
              <MDBBtn outline color="secondary" size="sm" type="button">
                Escribenos 
              </MDBBtn>
            </MDBNavbarNav>
            
            <MDBNavbarNav className="d-flex w-auto mb-2 flex-row">
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="https://www.facebook.com/SiquijorLanguageAcademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="https://www.instagram.com/siquijorlanguageacademy/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="https://api.whatsapp.com/send/?phone=34601502057&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBIcon fab icon="whatsapp" />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default NavBar;
