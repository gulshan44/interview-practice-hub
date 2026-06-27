import React, { useEffect, useState } from 'react'

const StopWatch = () => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-4">
            <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">

                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                    Stopwatch
                </h1>

                {/* Time Display */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 tracking-wider break-all">
                        {String(hours).padStart(2, "0")}:
                        {String(minutes).padStart(2, "0")}:
                        {String(seconds).padStart(2, "0")}
                    </h2>
                    <p className="mt-4 text-center text-gray-500 dark:text-gray-300 font-medium text-sm sm:text-base">
                        {isRunning ? "Running.... " : "Stopped... "}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <button
                        onClick={() => setIsRunning(true)}
                        className={`px-6 py-2 rounded-lg text-white ${isRunning
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-500 hover:bg-green-600"
                            }`}>
                        Start
                    </button>

                    <button
                        onClick={() => setIsRunning(false)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg transition">
                        Stop
                    </button>

                    <button
                        onClick={() => {
                            setTime(0);
                            setIsRunning(false);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition">
                        Reset
                    </button>
                </div>

            </div>
        </div>
    )
}

export default StopWatch