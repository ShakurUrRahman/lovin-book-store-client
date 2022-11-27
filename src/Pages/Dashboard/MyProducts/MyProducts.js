import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {

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

    return (
        <div>
            <div>
                <h2 className='font-bold text-3xl text-pink-400 text-center my-5'>My Products: {products?.length}</h2>
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
                            products?.map((product, i) => <tr>
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

                                </td>
                                <td>
                                    <button className='btn btn-sm btn-info'>Advertise</button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-warning'>Delete</button>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;