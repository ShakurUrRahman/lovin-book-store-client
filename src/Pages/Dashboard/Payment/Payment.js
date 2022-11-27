import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();

    return (
        <div>
            <h2>Payment</h2>
        </div>
    );
};

export default Payment;