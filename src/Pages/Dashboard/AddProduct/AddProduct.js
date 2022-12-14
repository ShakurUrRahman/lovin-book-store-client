import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    // console.log(user?.displayName);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        productName: data.productName,
                        writer: data.writer,
                        mobileNumber: data.mobileNumber,
                        meetingLocation: data.meetingLocation,
                        price: data.price,
                        originalPrice: data.originalPrice,
                        sellerName: user?.displayName,
                        section: data.section,
                        description: data.description,
                        yearOfPurchase: data.year,
                        condition: data.condition,
                        image: imgData.data.url
                    }
                    fetch('https://lovin-book-store-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Added successfully`)
                            navigate('/dashboard/myProducts')
                        })
                }

            })
    }


    return (
        <div className='w-96 px-7 pt-5 pb-10'>
            <div>
                <h2 className='font-bold text-3xl text-pink-400 text-center my-2'>Add A Product</h2>
            </div>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs mb-2">
                    <input type="text" placeholder='Product Name' {...register('productName', {
                        required: "Name is required"
                    })} className="input input-xs input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mb-2">
                    <input type="text" placeholder='Writer Name' {...register('writer', {
                        required: "Writer is required"
                    })} className="input input-xs input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mb-2">
                    <input type="number" placeholder='Mobile Number' {...register('mobileNumber')} className="input input-xs input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mb-2">
                    <input type="text" placeholder='Meeting Location' {...register('location')} className="input input-xs input-bordered w-full max-w-xs" />
                </div>
                <label className="label"><span className="label-text">Section</span></label>
                <select className="select select-bordered select-xs w-full max-w-xs mt-2" {...register('section')}>
                    <option value="skill">Skill</option>
                    <option value="fiction">Fiction</option>
                    <option value="motivation">Motivation</option>
                </select>
                <div className="form-control w-full max-w-xs mb-2">
                    <input type="text" placeholder='Description' {...register('description')} className="input input-xs input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mb-2">
                    <input type="number" placeholder='Original Price' {...register('originalPrice')} className="input input-xs input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mb-2">
                    <input type="number" placeholder='Price' {...register('price')} className="input input-xs input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mb-2">
                    <input type="number" placeholder='Year of Purchase' {...register('year')} className="input input-xs input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mb-2">
                    <input type="text" value={user?.displayName} disabled placeholder='Seller Name' {...register("sellerName")} className="input input-xs input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Condition</span></label>
                    <select className="select select-bordered select-xs w-full max-w-xs mt-2" {...register('condition')}>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Picture</span></label>
                    <input type="file" placeholder='Image' {...register('image', {
                        required: "Picture is required"
                    })} className="input input-xs input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-sm bg-pink-400 w-full mt-5' value='Add' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;