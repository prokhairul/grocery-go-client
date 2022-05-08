import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import ManageProduct from '../../ManageProduct/ManageProduct'
import { useNavigate } from 'react-router-dom';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const navigateTomanageProduct = () => {
        navigate('/manageinventory')
    }

    return (
        <div id='products' className='container'>
            <div className='row '>
                <h2 className='products-title'> Our Popular Products </h2>
                <div className='products-container'>
                    {
                        products.map(product => <Product

                            key={product._id}
                            product={product}

                        ></Product>)
                    }
                </div>
                <div className='manage-btn'>
                    <button className='btn btn-success mt-5' onClick={navigateTomanageProduct}>Manage Inventories </button>
                </div>


            </div>



        </div>
    );
};

export default Products;