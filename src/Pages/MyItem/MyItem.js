
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import auth from '../../firebase.init';
import SingleItem from './SingleItem/SingleItem';
import './MyItem.css'

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://boiling-tundra-92423.herokuapp.com/items?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getItems();

    }, []);

    return (

        <div className='container mb-5 '>
            <h2 className='products-title' >You've Added This Items </h2>

            <div className='products-container my-item-container'>
                {
                    items.slice(0, 50).map(item => <SingleItem
                        key={item._id}
                        item={item}
                    ></SingleItem>)
                }
            </div>
        </div>
    );
};

export default MyItem;