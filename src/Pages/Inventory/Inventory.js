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

    const handleQuantityUpdate = event => {
        event.preventDefault();
        const itemQuantity = event.target.quantity.value;
        const newQuantity = parseInt(itemQuantity);
        const originalQty = product.quantity;
        const parseOriginal = parseInt(originalQty);
        const updatedQuantity = parseOriginal + newQuantity;
        console.log(updatedQuantity);
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    };


    return (

        <div className='container'>
            <h2 className='single-product-title'>Product Details : </h2>
            <div className='single-product'>
                <div className='single-img'>
                    <img src={product.img} alt="" />
                </div>
                <div className='product-detail'>
                    <h2> <strong> Product name :</strong>  {product.name}</h2>
                    <h4> <strong>Product ID:</strong>  {product._id}</h4>
                    <h4> <strong>Supplier:</strong>  {product.supplier}</h4>
                    <p> <strong>Product Description:</strong>  {product.description}</p>
                    <h4> <strong>Price:</strong> {product.price} TK</h4>
                    <h4> <strong>Quantity:</strong> {product.quantity}</h4>
                    <button className='btn btn-success'>Deliver</button>

                    <div className='update-stock'>
                        <form onSubmit={handleQuantityUpdate}>
                            <input type="text" name='quantity' required placeholder='Update Your Quantity' />
                            <input type="submit" value="Add Quantity"></input>
                        </form>

                        <button className='btn btn-danger stock-out'>Out Of Stock </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;