import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Manage.css'

const Manage = ({ product, handleDelete }) => {
    const { _id, name, price, quantity, supplier } = product;
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
                    <ListGroup.Item>{quantity}</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <ListGroup>
                    <ListGroup.Item> <button onClick={() => handleDelete(_id)} className='btn btn-secondary'>Delete</button></ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Manage;