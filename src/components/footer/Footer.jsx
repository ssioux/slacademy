import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter  color="white" bgColor='dark' outline="light" className='text-center text-lg-start text-muted footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conectate con nosotros en las redes sociales:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/SiquijorLanguageAcademy/' target="_blank" rel="noopener noreferrer" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://www.instagram.com/siquijorlanguageacademy/?hl=es'  target="_blank" rel="noopener noreferrer" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>

          <a href='https://api.whatsapp.com/send/?phone=34601502057&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='whatsapp' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                SLAcademy
              </h6>
              <p>
              Siquijor Language Academy se destaca como el principal destino para la educación de ESL en la isla de Siquijor. Como la única academia dedicada exclusivamente a la enseñanza de inglés como segundo idioma.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Clases presenciales
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Cursos online
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Link 3
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Link 4
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Enlaces Útiles</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Precios
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Que hacer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ayuda
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Maite, San Juan, Siquijor, 6227 Filipinas.
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                siquijorlanguageacademy@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +63 927 970 7007
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          {" "} Dalaes
        </a>
      </div>
    </MDBFooter>
  );
}