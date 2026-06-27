import React, { useEffect, useState } from 'react'

const ExpenseTracker = () => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [editId, setEditId] = useState(null);

    const [transactions, setTransactions] = useState(() => {
        const savedTransactions =
            localStorage.getItem("transactions");

        return savedTransactions
            ? JSON.parse(savedTransactions)
            : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }, [transactions]);

    const addTransaction = () => {
        if (!title.trim() || !amount) return;

        if (editId) {
            setTransactions(
                transactions.map((item) =>
                    item.id === editId
                        ? {
                            ...item,
                            title,
                            amount: Number(amount),
                        }
                        : item
                )
            );

            setEditId(null);
        } else {
            const newTransaction = {
                id: Date.now(),
                title,
                amount: Number(amount),
            };

            setTransactions([newTransaction, ...transactions]);
        }

        setTitle("");
        setAmount("");
    };

    const income = transactions
        .filter((item) => item.amount > 0)
        .reduce((acc, item) => acc + item.amount, 0);

    const expense = transactions
        .filter((item) => item.amount < 0)
        .reduce((acc, item) => acc + item.amount, 0);

    const balance = income + expense;

    const deleteTransaction = (id) => {
        setTransactions(
            transactions.filter((item) => item.id !== id)
        );
    };

    const editTransaction = (transaction) => {
        setTitle(transaction.title);
        setAmount(transaction.amount);
        setEditId(transaction.id);
    };

    const clearAllTransactions = () => {
        setTransactions([]);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                    Expense Tracker
                </h1>

                {/* Balance */}
                <div className="text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
                    <h2 className="text-gray-500 dark:text-gray-300">
                        Current Balance
                    </h2>

                    <p className="text-4xl font-bold">
                        ₹{balance}
                    </p>
                </div>

                {/* Income & Expense */}
                <div className="grid grid-cols-2 gap-4 mb-6">

                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="font-semibold">Income</h3>
                        <p className="text-green-600 font-bold">
                            ₹{income}
                        </p>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="font-semibold">Expense</h3>
                        <p className="text-red-600 font-bold">
                            ₹{Math.abs(expense)}
                        </p>
                    </div>

                </div>

                {/* Form */}
                <div>

                    <input
                        type="text"
                        placeholder="Enter title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded-lg px-4 py-3 mb-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />

                    <input
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                addTransaction();
                            }
                        }}
                        type="number"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border rounded-lg px-4 py-3 mb-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />

                    <button
                        onClick={addTransaction}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95"
                    >
                        {editId ? "Update Transaction" : "Add Transaction"}
                    </button>

                </div>

                {/* Transaction History */}
                <div className="mb-6">
                    <div className="flex justify-between items-center my-3">
                        <h3 className="font-bold text-lg">
                            Transaction History
                        </h3>

                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {transactions.length}
                        </span>
                    </div>

                    {transactions.length === 0 ? (
                        <div className="border-2 border-dashed rounded-xl p-8 text-center">
                            <p className="text-5xl mb-3">₹</p>

                            <h3 className="font-semibold text-lg">
                                No Transactions Yet
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Start tracking your income and expenses today.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                            {transactions.map((transaction) => (
                                <div
                                    key={transaction.id}
                                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border rounded-lg p-4"
                                >
                                    <div className='flex justify-between space-x-2.5 items-center text-xl'>
                                        <p className="font-medium">
                                            {transaction.title}
                                        </p>

                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${transaction.amount > 0
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-600"
                                                }`}
                                        >
                                            {transaction.amount > 0 ? "Income" : "Expense"}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2">
                                        <span
                                            className={`font-bold text-lg ${transaction.amount > 0
                                                ? "text-green-600"
                                                : "text-red-600"
                                                }`}
                                        >
                                            ₹{Math.abs(transaction.amount)}
                                        </span>

                                        <button
                                            onClick={() => editTransaction(transaction)}
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition-all duration-300 active:scale-95"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => deleteTransaction(transaction.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-all duration-300 active:scale-95"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {transactions.length > 0 && (
                    <button
                        onClick={clearAllTransactions}
                        className="w-full mb-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                    >
                        Clear All
                    </button>
                )}

            </div>
        </div>
    );
};

export default ExpenseTracker