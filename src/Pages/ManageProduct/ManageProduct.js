import React from 'react';
import { ListGroup } from 'react-bootstrap';
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
            const url = `https://boiling-tundra-92423.herokuapp.com/product/${id}`;
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

            <div className='table-head'>
                <div>
                    <ListGroup as="ul" >
                        <ListGroup.Item as="li" active>name </ListGroup.Item>
                    </ListGroup>
                </div>
                <div>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>Price </ListGroup.Item>
                    </ListGroup>
                </div>
                <div>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>Suplier </ListGroup.Item>
                    </ListGroup>
                </div>
                <div>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>Quantity </ListGroup.Item>
                    </ListGroup>
                </div>
                <div>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active> Remove </ListGroup.Item>
                    </ListGroup>
                </div>
            </div >

            {
                products.map(product => <Manage
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                ></Manage>)
            }
            < div className='manage-product-btn' >
                <button onClick={handleNavigate} className='btn btn btn-success'>Add New Products</button>
            </div >
            <ToastContainer
            ></ToastContainer>
        </div >
    );
};

export default ManageProduct;