import React, { useState } from "react";

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);

    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [copied, setCopied] = useState(false);

    const generatePassword = () => {
        let chars = "";

        if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
        if (numbers) chars += "0123456789";
        if (symbols) chars += "!@#$%^&*()_+";

        if (!chars) {
            alert("Please select at least one option!");
            return;
        }

        let generatedPassword = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(
                Math.random() * chars.length
            );

            generatedPassword += chars[randomIndex];
        }

        setPassword(generatedPassword);
    };

    const copyPassword = () => {
        if (!password) return;

        navigator.clipboard.writeText(password);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-4">
            <div className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-5 sm:p-8 border border-gray-100 dark:border-gray-700">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                    Password Generator
                </h1>

                {/* Password Display */}
                <input
                    type="text"
                    value={password}
                    readOnly
                    placeholder="Generated Password"
                    className="w-full border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white p-4 rounded-xl mb-4 outline-none text-lg font-mono focus:ring-2 focus:ring-blue-500"
                />

                <div className="mb-4">
                    <p className="text-sm text-gray-500">
                        Strength:
                        {length < 8
                            ? " Weak 🔴"
                            : length < 15
                                ? " Medium 🟡"
                                : " Strong 🟢"}
                    </p>
                </div>

                {/* Length */}
                <div className="mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                    <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                        Password Length: {length}
                    </label>

                    <input
                        type="range"
                        min="4"
                        max="30"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="w-full"
                    />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <input
                            type="checkbox"
                            checked={uppercase}
                            onChange={() => setUppercase(!uppercase)}
                            className="w-5 h-5 accent-blue-600"
                        />
                        Uppercase Letters
                    </label>

                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <input
                            type="checkbox"
                            checked={lowercase}
                            onChange={() => setLowercase(!lowercase)}
                            className="w-5 h-5 accent-blue-600"
                        />
                        Lowercase Letters
                    </label>

                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <input
                            type="checkbox"
                            checked={numbers}
                            onChange={() => setNumbers(!numbers)}
                            className="w-5 h-5 accent-blue-600"
                        />
                        Numbers
                    </label>

                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <input
                            type="checkbox"
                            checked={symbols}
                            onChange={() => setSymbols(!symbols)}
                            className="w-5 h-5 accent-blue-600"
                        />
                        Symbols
                    </label>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={generatePassword}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95"
                    >
                        Generate Password
                    </button>

                    <button
                        onClick={copyPassword}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95"
                    >
                        {copied ? "Copied ✅" : "Copy"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;