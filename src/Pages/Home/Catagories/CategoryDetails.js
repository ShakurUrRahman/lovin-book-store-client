import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const categoryDetails = useLoaderData();
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
                    <div className="card-actions">
                        <button className="btn btn-primary">Book Now</button>
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
                    <p><small>Present Price: {secondBook.resellPrice}</small></p>
                    <p><small>Original Price: {secondBook.originalPrice}</small></p>
                    <p>Using Period: {secondBook.usesTime}</p>
                    <h2 className='text-xl'>Seller Name: {secondBook.sellerName}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;