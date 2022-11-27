import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {

    const { data: allBuyers = [], refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBuyers');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div>
                <h2 className='font-bold text-3xl text-pink-400 text-center my-5'>All Buyer</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete Button</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers?.map((allBuyer, i) => <tr key={allBuyer._id}>
                                <th>{i + 1}</th>
                                <td>{allBuyer?.name}</td>
                                <td>{allBuyer?.email}</td>
                                <td><button className='btn btn-accent btn-sm'>Delete</button></td>
                                <td>{allBuyer.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;