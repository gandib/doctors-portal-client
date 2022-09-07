import React from 'react';


const BookingService = ({ service, setTreatment }) => {
    const { name, slots, availableTime } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>
                <p>{
                    slots.length > 0
                        // ? <span>{slots[0]}</span>
                        ? <span>{availableTime}</span>
                        : <span className='text-red-500'>Try another date</span>
                }</p>
                <p className='text-xs'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="text-center">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-primary text-center uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default BookingService;