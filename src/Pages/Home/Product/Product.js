import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {

    const { _id, name, description, price, quantity, supplier, img } = product;
    const navigate = useNavigate();

    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='product'>
            <Card>
                <Card.Img className='w-75' variant="top" src={img} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='mb-1'> <strong>Quantity : {quantity} </strong> Piece  </Card.Text>
                    <Card.Text> <strong>Suplier : {supplier}</strong>  </Card.Text>
                    <Card.Text>{description} </Card.Text>
                    <Card.Text> <strong>Price: {price} ৳</strong> </Card.Text>
                    <div className='mt-3'>
                        <Button onClick={() => navigateToInventory(_id)} variant="secondary">Update Stock</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;