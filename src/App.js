// src/App.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import product from './data/product';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './styles/App.css'; // File for additional styling

const firstName = "I am Onesmus";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Sports Fanatiks KE</h1>
      </header>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title><Name name={product.name} /></Card.Title>
                <Card.Text><Description description={product.description} /></Card.Text>
                <Card.Text><Price price={product.price} /></Card.Text>
                <Image imageUrl={product.imageUrl} />
              </Card.Body>
            </Card>
            {firstName ? (
              <div>
                <p>Hello, {firstName}!</p>
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/soccer-player-10212470-8263143.png?f=webp" alt= "Avatar" className="avatar" />
              </div>
            ) : (
              <p>Hello, there!</p>
            )}
          </Col>
        </Row>
      </Container>
      <footer>
        <p>© 2024 Sports Fanatiks KE. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
