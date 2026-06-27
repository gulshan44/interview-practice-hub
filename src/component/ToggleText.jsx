import React, { useState } from "react";

const ToggleText = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-4">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center">

                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Toggle Text
                </h1>

                <p className="text-gray-500 mb-6">
                    Show or hide content with a single click.
                </p>

                <button
                    onClick={() => setShow(!show)}
                    className={`px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 active:scale-95 ${show
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-blue-500 hover:bg-blue-600"
                        }`}
                >
                    {show ? "Hide Text" : "Show Text"}
                </button>

                <div
                    className={`overflow-hidden transition-all duration-500 ${show ? "max-h-40 opacity-100 mt-6" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="bg-gray-100 rounded-2xl p-5 border">
                        <p className="text-lg font-medium text-gray-700">
                            👋 Hello, I am visible now!
                        </p>
                    </div>
                </div>

                <p className="text-sm text-gray-400 mt-4">
                    Status: {show ? "Visible ✅" : "Hidden ❌"}
                </p>

            </div>
        </div>
    );
};

export default ToggleText;