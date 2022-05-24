import React from 'react';
import blog from '../../image/blog.png'

const Blog = () => {
    return (
        <div className="info">
            <h4 className="m-3">1.How will you improve the performance of a React Application?</h4>
            <p className="p-3 m-2">Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.
                <li>Use the Production Build</li>
                <li>Create React App</li>
                <li>Single-File Builds</li>
                <li>Brunch</li>
            </p>
            <h4 className="m-3">2. What are the different ways to manage a state in a React application?</h4>
            <p className="p-3 m-2">The dififerent ways to manage a  state in a react application. The state helps in keeping the data of different components in sync since each state update will re-render all relevant components. It can also act as a medium to communicate between various components.
            <li>Communication State</li>
            <li>Data State</li>
            <li>Control State</li>
            <li>Session State</li>
            </p>
            <h4 className="m-3">3.How does prototypical inheritance work?</h4>
            <p className="p-3 m-2"> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
            {/* <p>const o = {
            a 2,
            m: function() {
             return this.a + 1;
             }
             }</p> */}
             <img className="w-50" src={blog} alt="" />
             <p className="p-3 m-2 ">Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. </p>
             <p>Using prototypes in JavaScript</p>
            <p> function doSomething() {} </p>
<p>console.log( doSomething.prototype ); </p>
            </p>
<h4 className="m-3"> 4.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
<p className="p-3 m-2"> 
  I use the setProduct because The Set object lets I store unique values of any type, 

  </p>

  <h4 className="m-3"> 5.What is a unit test? Why should write unit tests?</h4>
  <p className="p-3 m-2"> <b> unit test: </b>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.
  Because i should write Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
  </p>
        </div>
    );
};

export default Blog;

