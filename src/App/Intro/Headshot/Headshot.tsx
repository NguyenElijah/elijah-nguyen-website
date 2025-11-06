import './Headshot.scss';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../../assets/images/headshot.jpg';
import pic3 from '../../../assets/images/posing_with_mia.jpg';

function Headshot() {
  return <>
    <div className="carousel-container">
      <Carousel data-bs-theme="dark" wrap={true} interval={5000}>
        <Carousel.Item className="carousel-item">
          <div className="carousel-image-container">
          <img className="carousel-image" src={pic1} />
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="carousel-image-container">
            <img className="carousel-image" src={pic3} />
          </div>
        </Carousel.Item >
        <Carousel.Item className="carousel-item">
          <div className="carousel-image-container">
            <img className="carousel-image" src={pic3} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </>
}

export default Headshot;