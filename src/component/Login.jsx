import React, { useState } from 'react'

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        console.log(userName, password)
        setUserName("")
        setPassword("")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-gray-900 to-black p-4">

            <form onSubmit={handleForm}
                className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">

                <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-2xl text-white font-bold">
                        G
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">
                        Welcome Back 👋
                    </h2>

                    <p className="text-gray-300 mt-2">
                        Sign in to continue
                    </p>
                </div>

                <div>
                    <input
                        type="email"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800/70 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder='Username'
                    />
                </div>

                <div>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800/70 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder='Password'
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 active:scale-95"
                >
                    Submit
                </button>

                <div className="flex justify-between text-sm text-gray-300">
                    <button
                        type="button"
                        className="hover:text-white transition"
                    >
                        Forgot Password?
                    </button>

                    <button
                        type="button"
                        className="hover:text-white transition"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login