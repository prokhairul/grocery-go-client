import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useProducts from '../../hooks/useProducts'
import Manage from '../ManageProduct/Manage'
import './Manage.css'

const ManageProduct = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingItems = products.filter(product => product._id !== id);
                        setProducts(remainingItems);
                        toast('Item Deleted Successfully')
                    }
                });
        }
    }

    const handleNavigate = () => {
        navigate('/add')
    }

    return (
        <div className='container'>
            <h2 className='manage-title' >Manage Your Product </h2>
            {
                products.map(product => <Manage
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                ></Manage>)
            }
            <div className='manage-product-btn'>
                <button onClick={handleNavigate} className='btn btn btn-success'>Add New Products</button>
            </div>
            <ToastContainer
            ></ToastContainer>
        </div>
    );
};

export default ManageProduct;