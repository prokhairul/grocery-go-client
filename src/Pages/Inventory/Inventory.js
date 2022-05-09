import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './Inventory.css'

const Inventory = () => {
    const [quantity, setQuantity] = useState(10);
    const { id } = useParams();
    const [product, setProducts] = useState([]);


    useEffect(() => {
        const url = `https://boiling-tundra-92423.herokuapp.com/product/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelivered = () => {

        const staticQuantity = quantity - 1;
        if (staticQuantity < 0) {
            toast('Please Update Stocks')
            return;
        }
        setQuantity(staticQuantity);
    }

    const handleQuantity = (event) => {
        event.preventDefault();
        const inputValue = event.target.quantity.value;
        const qtyValue = parseInt(inputValue);
        setQuantity(qtyValue + quantity)
        event.target.quantity.value = ""
    }

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
                    <h4> <strong>Quantity:</strong> {quantity}</h4>
                    <button onClick={handleDelivered} className='btn btn-success'>Deliver</button>

                    <div className='update-stock'>
                        <form onSubmit={handleQuantity}>
                            <input type="text" name='quantity' required placeholder='Quantity' />
                            <input type="submit" value="Add Quantity"></input>
                        </form>

                        <button className='btn btn-danger stock-out'>Out Of Stock </button>

                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Inventory;