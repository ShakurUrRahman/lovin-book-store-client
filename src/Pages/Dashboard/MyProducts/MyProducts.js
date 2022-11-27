import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }


    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/products', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
            }
        }
    });

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${product.productName} deleted successfully`)
                }
            })
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h2 className='font-bold text-3xl text-pink-400 text-center my-5'>My Books</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) => <tr
                                key={product._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product?.image} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product?.productName}</div>
                                            <div className="text-sm opacity-50">{product.price}Tk</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button onClick={() => handleStatusUpdate(product._id)} className='btn btn-sm btn-outline'>
                                        {product.status ? product.status : 'unsold'}
                                    </button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-info'>Advertise</button>
                                </td>
                                <td>
                                    <label onClick={() => { setDeletingProduct(product) }} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.productName}. It can not be recover.`}
                    successModal={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deletingProduct}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;