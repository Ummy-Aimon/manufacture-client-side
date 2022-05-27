import './Achievement.css'
import banner from '../../image/contact-2.jpg'
import achieve from '../../image/counter-1.png'
import achieve1 from '../../image/counter-2.png'
import achieve2 from '../../image/counter-3.png'
import achieve3 from '../../image/counter-4.png'
import {  Hero } from 'react-daisyui';
import { Button, Card } from 'react-bootstrap';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from 'react-router-dom'

const Achievement = () => {
    return (

        <div className="info">
        <div id="achievement" className="title-text">
              <h1 className="title">Company Statistics</h1>
              <p className="fw-bold text-warning">Explore About Our Painting Services Achievement</p>
              </div>
              <div className="mb-5">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                  <Hero className="mt-5">
      <Hero.Overlay className="bg-opacity-60" />
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl text-warning fw-bold">Painting Services Achievement</h1>
          <p className="py-6">
          A paintbrush is a brush used to apply paint or ink. A paintbrush is usually made by clamping bristles to a handle with a ferrule. They are available in various sizes, shapes, and materials. Thicker ones are used for filling in, and thinner ones are used for details.
          </p>
          <Button as={Link}  to="/gallary" variant="warning" type="submit">
            <div className="d-flex jutify-content-center align-items-center">
    Send Message <AiOutlineArrowRight></AiOutlineArrowRight>
    </div>
  </Button>
        </div>
      </Hero.Content>
    </Hero>
    </div>
    <div className="col-md-6">
        <img className="mt-5" src={banner} alt="" />
    </div>
    
        </div>
         </div>
    </div>
   <div className="container">
                  <div className="row">
    <div className="col-md-3">
    <Card.Img className="w-50 mt-4" variant="top" src={achieve} />
  <Card.Body>
      <h4>400</h4>
    <Card.Title>Project Complate</Card.Title>
  </Card.Body>
    </div>
    <div className="col-md-3">
  <Card.Img className="w-50  mt-4" variant="top" src={achieve1} />
  <Card.Body>
      <h4>2029</h4>
    <Card.Title>Satisfied Clients</Card.Title>
  </Card.Body>
    </div>
    <div className="col-md-3">
  <Card.Img className="w-50 mt-4" variant="top" src={achieve2} />
  <Card.Body>
      <h4>3000</h4>
    <Card.Title>Awards Winning</Card.Title>
  </Card.Body>
    </div>
    <div className="col-md-3">
  <Card.Img className="w-50 mt-4" variant="top" src={achieve3} />
  <Card.Body>
      <h4>500+</h4>
    <Card.Title>Feedback</Card.Title>
  </Card.Body>
  </div>
    </div>
        </div>
      
        </div>
    );
};

export default Achievement;