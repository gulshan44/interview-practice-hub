import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialCards = ({ data }) => {
    return (
        <div className='flex items-center gap-10 flex-col md:flex-row text-center md:text-start'>

            <img
                src={data.image}
                alt={data.name}
                className="w-64 h-64 rounded-2xl object-cover"
            />

            <div className="max-w-xl">
                <h3 className="text-2xl font-semibold mb-4">
                    {data.name}
                </h3>

                <p className="text-gray-400 italic mb-4">
                    "{data.text}"
                </p>

                <Link
                    to={data.link}
                    className="text-indigo-600 hover:text-indigo-700 transition duration-300"
                >
                    {data.link}
                </Link>
            </div>
        </div>
    );
};

export default TestimonialCards;