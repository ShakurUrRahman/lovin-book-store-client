import React from 'react';
import toast from 'react-hot-toast';

const BookingModal2 = ({ categoryDetails, user, setModalData }) => {
    const { secondBook } = categoryDetails;

    const handleBookingTwo = event => {
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
                setModalData(null);
                toast.success('Booking Confirmed')
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-2">{secondBook.name}</h3>
                    <form onSubmit={handleBookingTwo} className='grid grid-cols-1 gap-2 mt-5'>
                        <input name="name" type="text" value={user.user?.displayName} disabled className="input input-bordered w-full" />
                        <input name="email" type="text" value={user.user?.email} disabled className="input input-bordered w-full" />
                        <input name="bookName" type="text" value={secondBook.name} disabled className="input input-bordered w-full" />
                        <input name="writerName" type="text" value={secondBook.writer} disabled className="input input-bordered w-full" />
                        <input name='resellPrice' type="text" value={secondBook.resellPrice} disabled className="input input-bordered w-full" />
                        <input name='phoneNumber' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='meetingLocation' type="text" placeholder="Meeting Location" className="input input-bordered w-full" />
                        <input name='image' type="text" className="input input-bordered w-full" value={secondBook.image} disabled />
                        <br />
                        <input className='btn btn-sm bg-pink-400 hover:bg-violet-600 w-full' type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal2;