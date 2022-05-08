import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Manage.css'

const Manage = ({ product }) => {

    const { _id, name, price, quantity, supplier } = product;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => toast('Product Deleted! Please Reload this Page :('));
        }
    }

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
                    <ListGroup.Item> <button onClick={() => handleDelete(_id)} className='btn btn-secondary'>Delete</button></ListGroup.Item>
                </ListGroup>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Manage;