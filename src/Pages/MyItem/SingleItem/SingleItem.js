import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleItem = ({ item, handleDelete }) => {
    const { _id, name, price, quantity, img } = item;

    return (
        <div className='product'>
            <Card>
                <Card.Img className='w-50' variant="top" src={img} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='mb-1'> <strong>Quantity : {quantity} </strong></Card.Text>
                    <Card.Text> <strong>Price: {price} ৳</strong> </Card.Text>
                    <div className='mt-3'>
                        <Button onClick={() => handleDelete(_id)} variant="secondary">Delete</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleItem;