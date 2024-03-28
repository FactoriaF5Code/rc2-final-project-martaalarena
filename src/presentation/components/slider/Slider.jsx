import Carousel from "react-bootstrap/Carousel";
import portadaSlider from "../../assets/portadaSlider.png";
// import secondSlider from "../../assets/PORTADA.jpg";
// import thirdSlider from "../../assets/teahupoo-1.jpg";
import "./Slider.css";

export default function Slider() {
  return (
    <>
      <Carousel className="carousel" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={portadaSlider}
            alt="First slide"
          />
          <div className="p__container">
            <p>
              Encuentra las mejores opiniones de las playas con mejores olas de
              Asturias
            </p>
          </div>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondSlider}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={thirdSlider} alt="Third slide" />
        </Carousel.Item> */}
      </Carousel>
    </>
  );
}
