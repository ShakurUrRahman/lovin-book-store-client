import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';


const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, setUser, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignup = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully')
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photoURL
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                        setUser({ ...user, ...userInfo })
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='h-full flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register('name', {
                            required: "Name is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email Address</span></label>
                        <input type="email" {...register('email', {
                            required: "Email is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register('password', {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be six characters long" },
                            pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*])/, message: 'Password must have uppercase, number, special character and lower case' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn w-full mt-5' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                </form>
                <p>Already have an account? <Link to='/login' className='text-green-500'>Please log in</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue with Google<FaGoogle className='ml-2'></FaGoogle></button>
            </div>
        </div>
    );
};

export default Signup;