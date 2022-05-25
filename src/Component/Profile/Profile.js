import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Profile = () => {
    return (
        <div className="info">
          <div id="tools" className="title-text">
              <h1 className="title">My Profile</h1>
              </div>
          <Card className="w-50 m-auto jutify-content-cemter align-items-center d-block" >
  <Card.Body>
    <Card.Title>Ummy Aimon Juthy</Card.Title>
    <Card.Text>
     I am Juthy. I  graduated from USTC in cse.
    </Card.Text>
    <Card.Link href="#">ummyatia@gmail.com</Card.Link>
    <br></br><br></br>
    <h6 className="text-danger m-3">Skills</h6>
    <ListGroup className="w-50" variant="flush">
    <ListGroup.Item>HTML5</ListGroup.Item>
    <ListGroup.Item>CSS3</ListGroup.Item>
    <ListGroup.Item>Bootstrap5</ListGroup.Item>
    <ListGroup.Item>Javascript</ListGroup.Item>
    <ListGroup.Item>React</ListGroup.Item>
    <ListGroup.Item>Python</ListGroup.Item>
    <h6 className="text-danger m-3">Live Website</h6>
   <a href=" https://fruits-warehouse-client-side.web.app/">fruit warehouse website</a>
   <a href=" https://independent-service-prov-7ff6e.web.app/">Independent Service website</a>
   <a href=" https://competent-visvesvaraya-00139d.netlify.ap">Mobile website</a>
  </ListGroup>
  </Card.Body>
</Card>  
        </div>
    );
};

export default Profile;