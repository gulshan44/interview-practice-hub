import React, { useState } from "react";

const BackgroundChang = () => {
  const colors = [
    {
      name: "Ocean Blue",
      color: "linear-gradient(135deg,#2193b0,#6dd5ed)",
    },
    {
      name: "Sunset",
      color: "linear-gradient(135deg,#ff9966,#ff5e62)",
    },
    {
      name: "Purple Dream",
      color: "linear-gradient(135deg,#8e2de2,#4a00e0)",
    },
    {
      name: "Emerald",
      color: "linear-gradient(135deg,#11998e,#38ef7d)",
    },
    {
      name: "Dark Night",
      color: "linear-gradient(135deg,#232526,#414345)",
    },
  ];

  const [selected, setSelected] = useState(colors[0]);

  return (
    <div
      className="min-h-screen flex justify-center items-center p-4 transition-all duration-500"
      style={{ background: selected.color }}
    >
      <div className="w-full max-w-2xl backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-white mb-3">
          Background Changer
        </h1>

        <p className="text-center text-white/80 mb-8">
          Select a theme and instantly change the background.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {colors.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className={`cursor-pointer rounded-2xl overflow-hidden border-4 transition-all duration-300 ${
                selected.name === item.name
                  ? "border-white scale-105"
                  : "border-transparent"
              }`}
            >
              <div
                className="h-24"
                style={{ background: item.color }}
              ></div>

              <div className="bg-white p-3 text-center font-medium">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-white text-lg">
            Selected Theme
          </p>

          <h2 className="text-2xl font-bold text-white mt-2">
            {selected.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BackgroundChang;