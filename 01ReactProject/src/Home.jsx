import React from 'react';
import NavBar from './NavBar';
import './Home.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <h1 className="text-center">Welcome to TechKit Market</h1>
        <p className="text-center mb-4">Your one-stop marketplace for engineering products!</p>
        
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>
                  This is a great engineering product that will help you with your projects!
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>
                  A fantastic tool for any engineer looking for innovation.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>
                  Discover the latest advancements in engineering with this product.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;