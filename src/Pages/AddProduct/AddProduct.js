import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: "",
            supplier: "",
            Description: "",
            price: "",
            quantity: "",
            img: ""
        }
    });

    const onSubmit = data => {
        const url = `https://boiling-tundra-92423.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => toast('Your Product Added Successfully'))
    };

    return (

        <div className='container'>

            <h2 className='text-center mt-5 mb-5 add-new-title'>Add a new Product </h2>
            <div className='form-field'>
                <form className='add-product' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Product Name' {...register("name", { required: true, maxLength: 100 })} />
                    <input className='mb-3' placeholder='Supplier' {...register("supplier")} />
                    <textarea className='mb-3' placeholder='Product Description' {...register("description")} />
                    <input className='mb-3' placeholder='Price' type="number" {...register("price",)} />
                    <input className='mb-3' placeholder='Quantity' type="text" {...register("quantity")} />
                    <input className='mb-3' placeholder='Photo URL' {...register("img")} />
                    <input type="submit" value="Add Product" />
                    <br />
                    <input type="submit" value="Reset Form"

                        onClick={() => {
                            reset()
                        }}
                    ></input>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;