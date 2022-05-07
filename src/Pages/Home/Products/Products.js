import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div id='products' className='container'>
            <div className='row'>
                <h2 >Our Products </h2>
                <div className='products-container'>
                    {
                        products.map(product => <Product

                            key={product.name}
                            product={product}

                        ></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;