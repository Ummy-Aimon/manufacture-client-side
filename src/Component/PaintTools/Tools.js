import React, { useEffect, useState } from 'react';
import Tool from './Tool';
import './Tools.css'

const Tools = () => {
    const[tools,setTool]= useState([])

    useEffect(()=>{
       fetch('http://localhost:5000/tools')
       .then(response => response.json())
       .then(data=>setTool(data))
    },[])
    return (
        <div>
            <div  className="title-text">
              <h1 className="title">PaintTools</h1>
              </div>
              <div className="tools-container">
              {
                     tools.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
              }
              </div>
        </div>
    );
};

export default Tools;