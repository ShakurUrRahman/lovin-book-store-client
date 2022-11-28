import React from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast';


const AllUsers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://lovin-book-store-server.vercel.app/buyers');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        console.log(id);
        fetch(`https://lovin-book-store-server.vercel.app/buyers/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: (`bearer ${localStorage.getItem('accessToken')}`)
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Make admin successful.')
                refetch();
            })
    }

    return (
        <div>
            <div>
                <h2 className='font-bold text-3xl text-pink-400 text-center my-5'>All Users</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action Button</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.role !== 'admin' && <button onClick={() => handleMakeAdmin(buyer._id)} className='btn btn-sm btn-primary'>Make Admin</button>}</td>
                                <td>{buyer.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;