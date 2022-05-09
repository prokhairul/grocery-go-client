
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import auth from '../../firebase.init';
import SingleItem from './SingleItem/SingleItem';
import './MyItem.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/items?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getItems();
    }, [user]);

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
                        console.log('deleted')
                        console.log(items)
                        const remainingItems = items.filter(item => item._id !== id);
                        setItems(remainingItems);
                        toast('Item Deleted Successfully')
                    }
                });
        }
    }

    return (

        <div className='container mb-5 '>
            <h2 className='products-title' >You've Added This Items: </h2>

            <div className='my-item-container'>
                {
                    items.slice(0, 50).map(item => <SingleItem
                        key={item._id}
                        item={item}
                        handleDelete={handleDelete}
                    ></SingleItem>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyItem;