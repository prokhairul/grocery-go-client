import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {

    const { name, description, price, quantity, supplier, img } = product;
    const navigate = useNavigate();

    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='product'>

            <Card style={{ width: '23rem' }}>
                <Card.Img className='w-75' variant="top" src={img} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title> Quantity: {quantity} </Card.Title>
                    <Card.Text> Suplier: {supplier} </Card.Text>
                    <Card.Text>{description} </Card.Text>
                    <Card.Header>Price: {price} TK</Card.Header>
                    <div className='mt-3'>
                        <Button variant="primary">Update Stock</Button>
                    </div>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Product;