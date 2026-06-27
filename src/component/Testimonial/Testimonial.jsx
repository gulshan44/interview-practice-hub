import React, { useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import testimonials from '../data/testimonials';
import TestimonialCards from './TestimonialCards';

const Testimonial = () => {

    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className='bg-black text-white py-10 px-6 md:px-20 overflow-hidden'>

            {/* Header */}
            <div className='flex items-center justify-between mb-8'>
                <h2 className="text-4xl font-bold flex items-center gap-3">
                    <span className="text-indigo-600 text-5xl">
                        <FaQuoteLeft />
                    </span>
                    Testimonials
                </h2>

                <div className="space-x-3">
                    <button onClick={prevSlide} className="border border-indigo-600 p-3 hover:bg-indigo-600 transition">
                        <FaArrowLeftLong />
                    </button>

                    <button onClick={nextSlide} className="border border-indigo-600 p-3 hover:bg-indigo-600 transition">
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            {/* Subtext */}
            <p className="text-gray-400 max-w-3xl mb-12">
                Meet the people who talking about me. You will impress by listening what they saying about me and about my Photography and Stunning Images.
            </p>

            {/* 🔥 Slider Wrapper */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {testimonials.map((item) => (
                        <div key={item.id} className="min-w-full">
                            <TestimonialCards data={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* dots */}
            <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-4 h-4 cursor-pointer transition-all duration-300
                        ${index === i ? "bg-indigo-600 scale-120" : "bg-gray-400"}
                        `}>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Testimonial;