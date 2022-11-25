import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ categoryDetails, user }) => {
    const { firstBook } = categoryDetails;
    console.log(user);
    const handleBookingOne = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const bookName = form.bookName.value;
        const resellPrice = form.resellPrice.value;
        const phoneNumber = form.phoneNumber.value;
        const meetingLocation = form.meetingLocation.value;
        const image = form.image.value;
        const writerName = form.writerName.value;

        const booking = {
            name,
            email,
            bookName,
            writerName,
            resellPrice,
            phoneNumber,
            meetingLocation,
            image
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Booking Confirmed')

            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-2">{firstBook.name}</h3>
                    <form onSubmit={handleBookingOne} className='grid grid-cols-1 gap-2 mt-5'>
                        <input name="name" type="text" value={user.user?.displayName} disabled className="input input-bordered w-full" />
                        <input name="email" type="text" value={user.user?.email} disabled className="input input-bordered w-full" />
                        <input type="text" />
                        <input name="bookName" type="text" value={firstBook.name} disabled className="input input-bordered w-full" />
                        <input name="writerName" type="text" value={firstBook.writer} disabled className="input input-bordered w-full" />
                        <input name='resellPrice' type="text" value={firstBook.resellPrice} disabled className="input input-bordered w-full" />
                        <input name='phoneNumber' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='meetingLocation' type="text" placeholder="Meeting Location" className="input input-bordered w-full" />
                        <input name='image' type="text" className="input input-bordered w-full" value={firstBook.image} disabled />
                        <br />
                        {/* <input className='btn btn-sm bg-pink-400 hover:bg-violet-600 w-full' type="submit" value="Book Now" /> */}
                        <input htmlFor="booking-modal" type="submit" className="btn btn-sm bg-pink-400 hover:bg-violet-600 w-full" value="Book Now" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;