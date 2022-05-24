import React from 'react';
import { Button,Form } from 'react-bootstrap';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import contact from "../../../image/contact-1.jpg"
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div  className="title-text">
              <h1 className="title">Get In Touch</h1>
              <p className="fw-bold text-warning">Don't Hesited To Conatct With Roxce</p>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
              <Form className="mt-4">
              <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Enter Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter Your email" />
  </Form.Group>
  <Form.Group controlId="floatingTextarea2" label="Your Message">
    <Form.Control
      as="textarea"
      placeholder="Your Message"
      style={{ height: '100px' }}
    />
    <br></br>
  </Form.Group>
  <Button as={Link}  to="/gallary" variant="warning" type="submit">
    <div className="d-flex jutify-content-center align-items-center">
    Send Message 
    <AiOutlineArrowRight></AiOutlineArrowRight>
    </div>
  </Button>
</Form>
<br></br>
</div>
<div className="col-md-6">
    <img src={contact} alt="" />
</div>
</div>
</div>    
 </div>
    );
};

export default Contact;