import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './receipt-item.css';
import logo from './../../../src/logo.svg';

const ReceiptItem = ({ item }) => {
    return (
        <Card bg='info'>
            <Row className="justify-content-center">
                <img className="receipt-img" src={logo}></img>
                <div>{item.name}</div>
                <p>{item.price} $</p>
                <span>{item.amount}</span>
            </Row>
        </Card>
    );
}

export default ReceiptItem;