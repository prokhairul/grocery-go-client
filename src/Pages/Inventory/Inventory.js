import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams();
    const [product, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    return (

        <div className='container'>

            <h2>Product Details : </h2>

            <div className='d-flex'>
                <div>
                    <img src={product.img} alt="" />
                </div>
                <div>
                    <h4>Product ID: {product._id}</h4>
                    <h2>Product name : {product.name}</h2>
                    <h4>Supplier: {product.supplier}</h4>
                    <p>Product Description: {product.description}</p>
                    <h4>Price: {product.price} TK</h4>
                    <h4>Quantity: {product.quantity}</h4>
                    <button className='btn btn-success'>Deliver</button>

                    <div className='update-stock'>
                        <input type="text" name='Input' required placeholder='Update Your Quantity' />
                        <button className='btn btn-danger'>Out Of Stock </button>
                        <button className='btn btn-primary'>Restock</button>
                    </div>

                </div>

            </div>




        </div>
    );
};

export default Inventory;