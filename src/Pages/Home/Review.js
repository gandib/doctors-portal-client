import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div>

                    <p>{review.description}</p>
                </div>
                <div className='flex justify-center items-center mt-9'>
                    <div>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
                                <img src={review.img} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h2 className="card-title">{review.name}</h2>
                        <h6>{review.location}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;