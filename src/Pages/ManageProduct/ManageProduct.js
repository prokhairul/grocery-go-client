import React from 'react';
import useProducts from '../../hooks/useProducts'
import Manage from '../ManageProduct/Manage'
import './Manage.css'

const ManageProduct = () => {
    const [products] = useProducts();

    return (
        <div className='container'>

            <h2 className='manage-title' >Manage Your Product </h2>

            {
                products.map(product => <Manage
                    key={product._id}
                    product={product}
                ></Manage>)
            }
        </div>
    );
};

export default ManageProduct;