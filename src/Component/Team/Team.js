import React from 'react';
import { Button, Card } from 'react-bootstrap';
import team from '../../image/team-1.jpg'
import team1 from '../../image/team-6.jpg'
import team2 from '../../image/team-2.jpg'
import team3 from '../../image/team-3.jpg'
import team4 from '../../image/team-4.jpg'
import team5 from '../../image/team-5.jpg'
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter } from 'react-icons/bs';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import './Team.css'

const Team = () => {
    return (
        <div className="info">
           <div  className="title-text">
              <h1 className="title">Our Team</h1>
         <p className="fw-bold text-warning">Meet The Expart Team</p>
              </div>
<div className="content">
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={team} />
  <Card.Body>
    <Card.Title>Shahnewaz Sakil</Card.Title>
    <Card.Text>
    Commercial Painter
    </Card.Text>
    <BsFacebook className="m-2"></BsFacebook>
                <BsTwitter className="m-2"></BsTwitter>
                <AiFillYoutube className="m-2"></AiFillYoutube>
                <AiFillLinkedin className="m-2"></AiFillLinkedin>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" className="" src={team1} />
  <Card.Body>
    <Card.Title>Shahnewaz Sakil</Card.Title>
    <Card.Text>
    Commercial Painter
    </Card.Text>
    <BsFacebook className="m-2"></BsFacebook>
                <BsTwitter className="m-2"></BsTwitter>
                <AiFillYoutube className="m-2"></AiFillYoutube>
                <AiFillLinkedin className="m-2"></AiFillLinkedin>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" className="" src={team2} />
  <Card.Body>
    <Card.Title>Shahnewaz Sakil</Card.Title>
    <Card.Text>
    Commercial Painter
    </Card.Text>
    <BsFacebook className="m-2"></BsFacebook>
                <BsTwitter className="m-2"></BsTwitter>
                <AiFillYoutube className="m-2"></AiFillYoutube>
                <AiFillLinkedin className="m-2"></AiFillLinkedin>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" className="" src={team3} />
  <Card.Body>
    <Card.Title>Shahnewaz Sakil</Card.Title>
    <Card.Text>
    Commercial Painter
    </Card.Text>
    <BsFacebook className="m-2"></BsFacebook>
                <BsTwitter className="m-2"></BsTwitter>
                <AiFillYoutube className="m-2"></AiFillYoutube>
                <AiFillLinkedin className="m-2"></AiFillLinkedin>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" className="" src={team4} />
  <Card.Body>
    <Card.Title>Shahnewaz Sakil</Card.Title>
    <Card.Text>
    Commercial Painter
    </Card.Text>
    <BsFacebook className="m-2"></BsFacebook>
                <BsTwitter className="m-2"></BsTwitter>
                <AiFillYoutube className="m-2"></AiFillYoutube>
                <AiFillLinkedin className="m-2"></AiFillLinkedin>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" className="" src={team5} />
  <Card.Body>
    <Card.Title>Shahnewaz Sakil</Card.Title>
    <Card.Text>
    Commercial Painter
    </Card.Text>
    <BsFacebook className="m-2"></BsFacebook>
                <BsTwitter className="m-2"></BsTwitter>
                <AiFillYoutube className="m-2"></AiFillYoutube>
                <AiFillLinkedin className="m-2"></AiFillLinkedin>
  </Card.Body>
</Card>
</div>
        </div>
    );
};

export default Team;
