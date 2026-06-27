import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const handleDec = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-100 dark:bg-gray-900">

      <h2 className="text-4xl sm:text-5xl font-bold text-white bg-indigo-700 px-6 py-4 rounded-xl shadow mb-8">
        Counter App
      </h2>

      <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
        Count: <span className="text-indigo-600 dark:text-indigo-400">{counter}</span>
      </h3>

      <div className="flex gap-6 mt-4">
        <button
          onClick={handleInc}
          className="bg-green-600 hover:bg-green-700 text-white text-lg sm:text-xl font-medium py-2 px-5 rounded-lg transition-all shadow"
        >
          + Increment
        </button>
        <button
          onClick={handleDec}
          className="bg-red-600 hover:bg-red-700 text-white text-lg sm:text-xl font-medium py-2 px-5 rounded-lg transition-all shadow"
        >
          - Decrement
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        Counter is limited between <strong>0</strong> and <strong>10</strong>
      </p>
    </div>
  );
};

export default Counter;
