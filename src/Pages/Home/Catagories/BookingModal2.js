import React from 'react';

const BookingModal2 = ({ categoryDetails, user }) => {
    const { secondBook } = categoryDetails;
    return (
        <>
            <input type="checkbox" id="booking-modal2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-2">{secondBook.name}</h3>
                    <form className='grid grid-cols-1 gap-2 mt-5'>
                        <input type="text" value={user.user?.displayName} disabled className="input input-bordered w-full" />
                        <input type="text" value={user.user?.email} disabled className="input input-bordered w-full" />
                        <input type="text" value={secondBook.name} disabled className="input input-bordered w-full" />
                        <input type="text" value={secondBook.resellPrice} disabled className="input input-bordered w-full" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="text" placeholder="Meeting Location" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-sm bg-pink-400 hover:bg-violet-600 w-full' type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal2;