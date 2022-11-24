import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { picture, name, description, _id } = category;
    return (
        <div className="card w-80 bg-pink-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl h-44 w-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='font-thin py-5'>{description}</p>
                <div className="card-actions">
                    <button className='btn btn-sm px-8 border-0 rounded-0 bg-pink-400 hover:bg-violet-600'><Link to={`/categoryDetails/${_id}`}><span className='text-black'>See this categories books</span></Link></button>
                </div>
            </div>
        </div>
    );
};

export default Category;