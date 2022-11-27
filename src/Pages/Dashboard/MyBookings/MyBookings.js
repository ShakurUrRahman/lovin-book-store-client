import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const MyBookings = () => {
    const { user } = useContext(AuthContext);


    const url = `http://localhost:5000/bookings?email=${user?.email}`


    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {

            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();

            return data;

        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div>
                <h2 className='font-bold text-3xl text-pink-400 text-center my-5'>My All Bookings</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold"> {booking.bookName}</div>
                                            <div className="text-sm opacity-50">by {booking.writerName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking.resellPrice}Tk
                                </td>
                                <td>
                                    {
                                        booking.resellPrice && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className="btn btn-sm">Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.resellPrice && booking.paid && <span className='text-primary'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;