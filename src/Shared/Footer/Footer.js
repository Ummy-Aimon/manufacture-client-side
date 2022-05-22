import React from 'react';
import './Footer.css'
import { ImLocation2 } from 'react-icons/im';
import {MdEmail } from 'react-icons/md';
import {BsFillTelephoneFill } from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter } from 'react-icons/bs';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import logo from '../../image/logo.png'


const Footer1 = () => {
    return (
        <div className="footer">
<div className="container">
    <div className="row">
        <div className="col-md-4">
          <h4 className="mt-3 ">About Company</h4> 
          <hr></hr> 
          <p className="text-justify">ROXCE Brush Factory is a professional manufacturer for series brushes over 30+ yearsspecial in paint brush and paint roller. By more than 30 years endeavor, our company has integrated the development, production and export of many sorts of paint brushes and paint tools</p>
          <img src={logo} alt="" />
        </div>
        <div className="col-md-4">
        <h4 className="mt-3 ">Quick Link</h4> 
        <hr></hr>
        <a className="text-decoration-none fw-bold" href="/">Residential Interior</a>
        <br></br>
        <a className="text-decoration-none fw-bold" href="/">Commercial Interior</a>
        <br></br>
        <a className="text-decoration-none fw-bold" href="/">Industrial Interior</a>
        <br></br>
        <a className="text-decoration-none fw-bold" href="/">Color Mixing</a>
        <br></br>
        <a className="text-decoration-none fw-bold" href="/">Painting & Decoration</a>
        </div>
        <div className="col-md-4">
        <h4 className="mt-3 ">Contact Us</h4> 
        <hr></hr>
        <h5 className="fw-bold"> <ImLocation2 className="icon"></ImLocation2> Location</h5>
        <p>30 Main Street, New York</p>
        <h5 className="fw-bold"> <MdEmail className="icon"></MdEmail> Email Us </h5>
        <p>support@example.com</p>
        <h5 className="fw-bold"> <BsFillTelephoneFill className="icon"></BsFillTelephoneFill> Phone Us</h5>
        <p>+012 (344) 678 99</p>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between">
                <div className="icons">
                <BsFacebook className="m-2"></BsFacebook>
                <BsTwitter className="m-2"></BsTwitter>
                <AiFillYoutube className="m-2"></AiFillYoutube>
                <AiFillLinkedin className="m-2"></AiFillLinkedin>
                </div>
                <p className="fw-bold">© 2022 Roxce All Rights Reserved</p>
            </div>
        </div>
</div>
        </div>
      )
    
};

export default Footer1;