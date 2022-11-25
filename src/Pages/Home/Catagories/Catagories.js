import React, { useEffect, useState } from 'react';
import Category from './Category';


const Catagories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="my-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 text-pink-600">Categories</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our featured categories</p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">After becoming a member from here you can select a category. You can buy or resell your books here.
                    </p>
                </div>

                <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none ">
                    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16 ">
                        {categories.map(category => (
                            <Category
                                key={category._id}
                                category={category}
                            ></Category>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagories;