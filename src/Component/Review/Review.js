import { useEffect, useState } from "react";
import Reveiws from "./Reveiws";


const Review = () => {
    const [reviews,setReview]= useState([])
    useEffect(()=>{
       fetch("http://localhost:5000/reviews")
       .then(response => response.json())
       .then(data=>setReview(data))
    },[])
    return (
        <div id="review">
            <div  className="title-text">
              <h1 className="title">What Our Clients Say
        About Roxce</h1>
         <p className="fw-bold text-warning">testimonial</p>
              </div>
              <div className="tools-container">
              {
                  reviews.map(review=><Reveiws key={review._id} review={review}></Reveiws>)
              }
              </div>
        </div>
    );
};

export default Review;