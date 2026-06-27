import React, { useState } from "react";

const SearchFilter = () => {
    const products = [
        "React",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "Redux",
        "Next.js",
    ];

    const [search, setSearch] = useState("");

    const filterProducts = products.filter((product) =>
        product.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-3xl text-gray-800 dark:text-white font-bold text-center mb-6">
                    Search Filter App
                </h1>

                <input
                    type="text"
                    placeholder="Search technology..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border dark:border-gray-600 dark:bg-gray-600 dark:text-white p-3 rounded-lg mb-4"
                />

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Found {filterProducts.length} Products
                </p>

                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                    {filterProducts.length > 0 ? (
                        filterProducts.map((product, index) => (
                            <div
                                key={index}
                                className="border dark:border-gray-600 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                            >
                                {product}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-red-500 font-medium">
                            No Product Found 😔
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;