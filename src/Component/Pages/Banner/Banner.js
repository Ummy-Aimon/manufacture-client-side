import React from 'react';
import './Banner.css'
import banner from '../../../image/banner.png'
import { Hero } from 'react-daisyui';

const Banner = () => {
    return (
        <div className="banner">
           <div className="container">
               <div className="row">
                   <div className="col-md-6">
                   <Hero>
      <Hero.Overlay className="bg-opacity-60" />
      <Hero.Content className="text-center">
        <div className="max-w-md  px-5">
          <h1 className="mt-5 text-white fw-bold">Painting Service Company</h1>
          <p>
          A paintbrush is a brush used to apply paint or ink. A paintbrush is usually made by clamping bristles to a handle with a ferrule. They are available in various sizes, shapes, and materials. Thicker ones are used for filling in, and thinner ones are used for details.
          </p>
          <button className="btn btn-warning">Get Started</button>
        </div>
      </Hero.Content>
    </Hero>
                   </div>
                   <div className="col-md-6">
                       <img className="w-100 mt-5" src={banner}alt="" />
                       </div>
               </div>
               </div> 
        </div>
    );
};

export default Banner;