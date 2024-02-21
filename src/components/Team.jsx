import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { TbPhone } from "react-icons/tb";
import {Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import "./Team.css";
import Ram from "../images/Ram.jpeg"
import Piyush from "../images/Piyush.jpeg"
import Vrushali from "../images/Vrushali.jpeg"
import Sagar from "../images/Sagar.jpeg"
import Abhishek from "../images/Abhishek.jpg"

const TeamComponent = () => {

  const image = {
    height : '20rem',
  }
  
  const cardStyle = {
    backgroundColor:'white',
    color: 'black', 
    padding: '20px',
    border: '1px solid grey',

  };

  const icon = {
    color:"black",height:"2rem", width:"3rem", float:'right'
  }

  const phone= {
    height:"3rem",
    width:"2rem"
  }

  const teamMembers = [
    {
      id: 1,
      name: 'Ram Gawali',
      role: 'Software Engineer',
      linkedn: 'https://www.linkedin.com/in/ram-gawali-139b06244/',
      gmail:'ramgawali45@gmail.com',
      insta:'#',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo consequat.',
      photo: Ram,
      phn : 7066716689
    },
    {
      id: 2,
      name: 'Piyush Harne',
      role: 'Software Engineer',
      linkedn: 'https://www.linkedin.com/in/piyush-harne-040088270/',
      gmail:'piyushharne26@gmail.com',
      insta:'https://www.instagram.com/rushikesh_nimje/',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo consequat.',
      photo: Piyush, 
      phn : 8408855958

    },
    {
      id: 3,
      name: 'Vrushali Kendre',
      role: 'Software Engineer',
      linkedn: "https://www.linkedin.com/in/vrashali-eknath-kendre-8ba5a6247/",
      gmail:'vrushalikendre13@gmail.com',
      insta:'#',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo consequat.',
      photo: Vrushali, 
      phn : 7972633099

    },
    {
      id: 4,
      name: 'Sagar Suryawanshi',
      role: 'Software Engineer',
      linkedn: "www.linkedin.com/in/connect-sagar-suryawanshi",
      gmail:' connectsagar02@gamil.com',
      insta:'#',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo consequat.',
      photo: Sagar,
      phn : 9403773289

    },
    {
      id: 5,
      name: 'Abhishek Shirote',
      role: 'Software Engineer',
      linkedn: 'www.linkedin.com/in/abhishek-shirote-90b686217',
      gmail:'abhishekvashirote@gmail.com',
      insta:'#',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      photo:Abhishek,
      phn : 9075152368

    },
  ];

  return (
    <Container style={{background:"none"}} className="my-5 px-3">
      <div className='heading'>
      <h2 className="text-center mb-4" style={{fontWeight:"700"}}>Meet Our Team</h2>
      </div>
     <div>
         <Row >
        {teamMembers.map((member) => (
          <Col key={member.id} md={12} sm={6} xs={12} className="mb-4">
            <Card style={cardStyle}>
              
              <Card.Body className='d-flex py-3 cardBody'>
                <div className='image_border'>
              <Card.Img style={image} variant="top" src={member.photo} alt={member.name} />
              </div>
              <div className='mt-4 pl-4'>
                <Card.Title style={{fontSize:"2.5rem"}}>{member.name}</Card.Title>
                <Card.Subtitle style={{fontWeight:"800"}} className="mb-2 text-muted">{member.role}</Card.Subtitle>
                <Card.Text>{member.description}</Card.Text>
                <Card.Text> <TbPhone style={phone} /> {member.phn}</Card.Text>
                <a href={member.linkedn} target='_blank'>
                    <FaLinkedin  style={icon} /></a>
                {/* </Link> */}
                <Link to={member.insta} target='_blank'>
                  <FaInstagram style={icon} />
                </Link>
                <Link to={`mailto:${member.gmail}`}>
                    <BiLogoGmail  style={icon} />
                </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
     </div>
     
    </Container>
  );
};

export default TeamComponent;
