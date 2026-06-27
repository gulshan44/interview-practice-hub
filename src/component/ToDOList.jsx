import React, { useEffect, useState } from "react";

const ToDOList = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task.trim()) return;

        if (editId) {
            setTodos(
                todos.map((todo) =>
                    todo.id === editId ? { ...todo, text: task } : todo
                )
            );
            setEditId(null);
        } else {
            const newTodo = {
                id: Date.now(),
                text: task,
                completed: false,
            };

            setTodos([newTodo, ...todos]);
        }

        setTask("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const editTodo = (todo) => {
        setTask(todo.text);
        setEditId(todo.id);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-4">
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6">
                <h1 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Todo List
                </h1>

                <form onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 mb-6">
                    <input
                        type="text"
                        placeholder="Enter task..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="flex-1 border rounded-xl px-4 py-3 outline-none dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                    />

                    <button
                        type="submit"
                        className="w-full sm:w-auto bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 active:scale-95"
                    >
                        {editId ? "Update" : "Add"}
                    </button>
                </form>

                {todos.length === 0 ? (
                    <div className="text-center py-10 border-2 border-dashed rounded-xl">
                        <p className="text-5xl mb-3">📝</p>

                        <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                            No Tasks Available
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Add your first task to get started.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                        {todos.map((todo) => (
                            <div
                                key={todo.id}
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border p-4 rounded-xl dark:border-gray-600 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => toggleComplete(todo.id)}
                                    />

                                    <p
                                        className={`break-words ${todo.completed
                                            ? "line-through text-gray-400"
                                            : "text-gray-800 dark:text-white"
                                            }`}
                                    >
                                        {todo.text}
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => editTodo(todo)}
                                        className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 active:scale-95"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => deleteTodo(todo.id)}
                                        className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 active:scale-95"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-6 flex justify-center">
                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
                        Total Tasks: {todos.length}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ToDOList;