import React from 'react';
import { Table } from 'react-bootstrap';
import './ManageProduct.css'

const ManageProduct = () => {
    return (
        <div className='container'>

            <h2 style={{ marginTop: '50px', marginBottom: '50px' }} >Manage Your Product </h2>

            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <th key={index}>Table heading</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default ManageProduct;