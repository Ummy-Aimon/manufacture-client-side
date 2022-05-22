import React from 'react';
import './About.css'
import about1 from '../../../image/about-1.jpg'
import { Hero } from 'react-daisyui';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="title-text">
            <h1 className="title">About Us</h1>
            </div>
            <div className="container">
            <div className="row">
            <div className="col-md-6">   
                <img className="mt-5" src={about1} alt="" /> 
                </div>
                <div className="col-md-6">
                <Hero>
      <Hero.Overlay className="bg-opacity-60" />
      <Hero.Content className="text-center">
        <div className="max-w-md mt-4">
          <h1 className="p-3 font-bold">Explore About Painting Services Success History</h1>
          <p><b>The invention of the paintbrush is generally attributed to Meng Tian, a general in the Qin Dynasty who lived around 300 BC.</b></p>
          <p>
          In the 15th century, brushes were preferably made of animal hair and quills. Soft hair or bristles were inserted into the quills. Due to the natural shape of the quills, these brushes could only be round. Their shape would accompany the art world for hundreds of years

          </p>
           <a href="https://finglaspainting.com/the-history-of-the-paint-brush/" className="btn btn-warning" target="_blank"> Read more </a>
        </div>
      </Hero.Content>
    </Hero>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;

