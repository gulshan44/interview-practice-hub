import React, { useState } from "react";

const Accordion = () => {
    const faqs = [
        {
            id: 1,
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces.",
        },
        {
            id: 2,
            question: "What is useState?",
            answer: "useState is a React Hook used to manage state.",
        },
        {
            id: 3,
            question: "What is JSX?",
            answer: "JSX allows us to write HTML inside JavaScript.",
        },
    ];

    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center p-4">
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h1 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h1>

                <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
                    Find answers to the most common questions.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className={`rounded-2xl border cursor-pointer overflow-hidden transition-all duration-500 ${openId === faq.id
                                    ? "bg-white dark:bg-gray-700 shadow-xl border-blue-500"
                                    : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md"
                                }`}
                        >
                            {/* Question */}
                            <div
                                onClick={() => handleToggle(faq.id)}
                                className="flex items-center justify-between p-5"
                            >
                                <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
                                    {faq.question}
                                </h2>

                                <span
                                    className={`text-2xl text-blue-500 transition-transform duration-500 ${openId === faq.id ? "rotate-45" : ""
                                        }`}
                                >
                                    +
                                </span>
                            </div>

                            {/* Answer */}
                            <div
                                className={`grid transition-all duration-500 ease-in-out ${openId === faq.id
                                    ? "grid-rows-[1fr]"
                                    : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;