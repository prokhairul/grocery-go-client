import React from 'react';
import { ListGroup, Table } from 'react-bootstrap';
import './Manage.css'

const Manage = ({ product }) => {

    const { _id, name, description, price, quantity, supplier, img } = product;


    return (
        <div className='manage-products'>
            <div>
                <ListGroup>
                    <ListGroup.Item>{name}</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <ListGroup>
                    <ListGroup.Item>{price} ৳</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <ListGroup>
                    <ListGroup.Item>{supplier}</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <ListGroup>
                    <ListGroup.Item>{quantity} Piece</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <ListGroup>
                    <ListGroup.Item> <button className='btn btn-secondary'>Delete</button></ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Manage;