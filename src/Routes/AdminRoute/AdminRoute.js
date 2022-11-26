import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center my-10'>
            <progress className="progress progress-secondary w-56 "></progress>
        </div>;
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;