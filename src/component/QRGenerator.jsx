import React, { useState } from "react";
import QRCode from "qrcode";
import { Link } from "react-router-dom";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQR = async () => {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const url = await QRCode.toDataURL(text);
      setQrCode(url);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const clearQR = () => {
    setText("");
    setQrCode("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          QR Generator
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
          Generate QR Codes instantly 🚀
        </p>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter text or URL..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              generateQR();
            }
          }}
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 mb-4"/>

        {/* Generate Button */}
        <button
          onClick={generateQR}
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 ${loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 active:scale-95"
            }`}>
          {loading ? "Generating..." : "Generate QR"}
        </button>

        {/* Clear Button */}
        {(text || qrCode) && (
          <button
            onClick={clearQR}
            className="w-full mt-3 bg-red-500 hover:bg-red-600 active:scale-95 text-white py-3 rounded-xl font-semibold transition-all duration-300">
            Clear
          </button>
        )}

        {/* QR Preview */}
        {qrCode && (
          <div className="mt-8 text-center animate-fade-in">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl shadow-inner">
              <img
                src={qrCode}
                alt="QR Code"
                className="mx-auto rounded-lg"/>
            </div>

            {/* Download Button */}
            <Link
              to={qrCode}
              download={`qr-${Date.now()}.png`}
              className="inline-block mt-5 bg-green-600 hover:bg-green-700 active:scale-95 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
              Download QR
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
