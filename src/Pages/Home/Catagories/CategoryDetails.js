import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import BookingModal from './BookingModal';
import BookingModal2 from './BookingModal2';

const CategoryDetails = () => {
    const categoryDetails = useLoaderData();
    const user = useContext(AuthContext);

    console.log(categoryDetails);
    const { firstBook, secondBook } = categoryDetails;
    return (
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 
        lg:max-w-[830px] lg:mx-auto my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={firstBook.image} alt="Shoes" className="rounded-xl w-72 h-80" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstBook.name}</h2>
                    <p>by <span className='font-bold'>{firstBook.writer}</span></p>
                    <p>Location: {firstBook.location}</p>
                    <p><small>Present Price: {firstBook.resellPrice}</small></p>
                    <p><small>Original Price: {firstBook.originalPrice}</small></p>
                    <p>Using Period: {firstBook.usesTime}</p>
                    <h2 className='text-xl'>Seller Name: {firstBook.sellerName}</h2>
                    <div className="card-actions ">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-sm bg-pink-400 hover:bg-violet-600 text-black mt-5 mx-auto">Book Now</label>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-5 pt-10">
                    <img src={secondBook.image} alt="Shoes" className="rounded-xl w-72 h-80" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{secondBook.name}</h2>
                    <p>by <span className='font-bold'>{secondBook.writer}</span></p>
                    <p>Location: {secondBook.location}</p>
                    <p><small>Present Price: {secondBook.resellPrice}TK</small></p>
                    <p><small>Original Price: {secondBook.originalPrice}TK</small></p>
                    <p>Using Period: {secondBook.usesTime}</p>
                    <h2 className='text-xl'>Seller Name: {secondBook.sellerName}</h2>
                    <div className="card-actions">
                        <label htmlFor="booking-modal2" className="btn btn-sm bg-pink-400 hover:bg-violet-600 text-black mt-5 mx-auto border-0 rounded-0">Book Now</label>
                    </div>
                </div>
            </div>
            {categoryDetails &&
                <BookingModal
                    user={user}
                    categoryDetails={categoryDetails}
                ></BookingModal>
            }
            {categoryDetails &&
                <BookingModal2
                    user={user}
                    categoryDetails={categoryDetails}
                ></BookingModal2>
            }
        </div>
    );
};

export default CategoryDetails;