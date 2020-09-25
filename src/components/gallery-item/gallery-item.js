import React from 'react';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { addOrder, removeOrder } from './../../actions';
import { Row } from 'react-bootstrap';

const GalleryItem = (props) => {
    console.log(props)
    const { storeItem, addOrder, removeOrder } = props
    return (
        <Card style={{ width: '18rem' }} bg={'dark'} text={'white'}>
            <Card.Img variant="top" src={storeItem.url} />
            <Card.Body>
                <Card.Title>{storeItem.name}</Card.Title>
                <p>{storeItem.price} $</p>
                <Row className='justify-content-space-between'>
                    <Button onClick={() => { addOrder(storeItem) }} variant="light">+</Button>
                    <span>{storeItem.amount}</span>
                    <Button onClick={() => { removeOrder(storeItem) }} disabled={storeItem.amount == 0 ? true : false} variant="light">-</Button>
                </Row>
            </Card.Body>
        </Card>
    );
}
const getState = state => {
    return {count:state.count}
}

export default connect(getState, { addOrder, removeOrder })(GalleryItem)