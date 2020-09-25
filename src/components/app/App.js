import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Gallery from '../gallery/gallery';
import Receipt from '../receipt/receipt';
import './App.css';
function App() {
  return (
    <Container>
      <Row>
        <Col >
          <Gallery />
        </Col>
        <Col xs lg="3">
          <Receipt />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
