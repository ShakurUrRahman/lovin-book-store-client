import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import logo from '../../../assets/logo.bmp'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li className='flex items-center p-2 font-bold'>{user.displayName}</li>
                <div className='flex items-center'>
                    <button className='btn btn-sm px-8 border-0 rounded-0 bg-pink-400' onClick={handleLogOut}><span className='text-black'>Logout</span></button>
                </div>
            </>
            :
            <div className='flex items-center'>
                <button className='btn btn-sm px-8 border-0 rounded-0 bg-pink-400'><Link to='/login'><span className='text-black'>Login</span></Link></button>
            </div>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <div className='flex items-center gap-3'>
                        <img className='h-12 w-30' src={logo} alt="" srcset="" /><span className='text-3xl text-pink-400'>Lovin Book Store</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;