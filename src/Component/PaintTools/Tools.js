import React, { useEffect, useState } from 'react';
import Tool from './Tool';
import './Tools.css'

const Tools = () => {
    const[tools,setTool]= useState([])

    useEffect(()=>{
       fetch('https://boiling-cove-99887.herokuapp.com/tools')
       .then(response => response.json())
       .then(data=>setTool(data))
    },[])
    return (
        <div>
            <div id="tools" className="title-text">
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