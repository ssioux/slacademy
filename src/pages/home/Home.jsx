import Carousel from 'react-bootstrap/Carousel';
import caro1 from "../../assets/images/carousel/caro1.jpg";
import caro2 from "../../assets/images/carousel/caro2.jpeg";
import caro3 from "../../assets/images/carousel/caro3.jpg";

import './home.scss';
function Home() {
  return (
    <>
      <section className="header">

        <div className='carousel'>
        <Carousel data-bs-theme="dark" className='caro'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro1}
          alt="siquijor_pic_1"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro2}
          alt="siquijor_pic_2"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro3}
          alt="siquijor_pic_3"
        />
      </Carousel.Item>
    </Carousel>
        </div>
        <div className="intro">        
        <h2>Quieres estudiar inglés en Filipinas y además disfrutar en una isla paradisíaca.</h2>

        <p>En Siquijor Language Academy queremos ofrecerte la oportunidad de explorar la misteriosa isla de Siquijor, Filipinas,
           mientras aprendes inglés y obtienes el título TESOL/TELF. Además, podrás disfrutar de las maravillas de esta isla paradisíaca, 
           como bucear en los mejores arrecifes, explorar cuevas impresionantes y relajarte en playas de arena blanca. 
           Nuestro objetivo es hacer que tu viaje sea lo más sencillo y agradable posible. 
           Por eso, desde Siquijor Language Academy te brindaremos todo el apoyo necesario para que solo tengas que disfrutar. 
           No dudes en contar con nuestra ayuda para hacer realidad este emocionante viaje que estás a punto de emprender.</p>

        </div>

      </section>
    </>
  );
}

export default Home;
