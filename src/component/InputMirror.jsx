import React, { useState } from "react";

const InputMirror = () => {
  const [text, setText] = useState("");

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <p className="text-lg font-medium text-gray-700">
        {text ? `You typed: ${text}` : "Start typing above..."}
      </p>
    </div>
  );
};

export default InputMirror;
