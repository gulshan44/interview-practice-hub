import React, { useState } from "react";

const QuizApp = () => {
    const questions = [
        {
            question: "What is React?",
            options: ["Framework", "Library", "Database", "Language"],
            answer: "Library",
        },
        {
            question: "Which hook is used for state management?",
            options: ["useRef", "useEffect", "useState", "useMemo"],
            answer: "useState",
        },
        {
            question: "What does JSX stand for?",
            options: [
                "Java Syntax Extension",
                "JavaScript XML",
                "JSON XML",
                "JavaScript Extension",
            ],
            answer: "JavaScript XML",
        },
        {
            question: "Which company developed React?",
            options: ["Google", "Meta", "Microsoft", "Netflix"],
            answer: "Meta",
        },
        {
            question: "Which method is used to render lists in React?",
            options: ["forEach", "filter", "map", "reduce"],
            answer: "map",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [showResult, setShowResult] = useState(false);

    const question = questions[currentQuestion];

    const handleNextQuestion = () => {
        // Score Increase
        if (selectedAnswer === question.answer) {
            setScore((prev) => prev + 1);
        }

        // Last Question Check
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedAnswer("");
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center p-4">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 text-center w-full max-w-md">
                    <h1 className="text-4xl font-bold mb-4">
                        Quiz Completed 🎉
                    </h1>

                    <p className="text-2xl mb-6">
                        Your Score: {score} / {questions.length}
                    </p>

                    <button
                        onClick={() => {
                            setCurrentQuestion(0);
                            setScore(0);
                            setSelectedAnswer("");
                            setShowResult(false);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
                    >
                        Restart Quiz
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
                <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    React Quiz
                </h1>

                <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
                    Test your React knowledge 🚀
                </p>

                <div className="mb-6">
                    <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            Question {currentQuestion + 1} of {questions.length}
                        </span>

                        <span className="font-medium text-blue-600">
                            Score: {score}
                        </span>
                    </div>

                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 transition-all duration-500"
                            style={{
                                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                            }}
                        ></div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                    {question.question}
                </h2>

                <div className="space-y-4">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedAnswer(option)}
                            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${selectedAnswer === option
                                ? "border-blue-500 bg-blue-100"
                                : "border-gray-200 text-white hover:bg-blue-500 hover:bg-blue-50"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                    className={`w-full mt-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 ${selectedAnswer
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    {currentQuestion === questions.length - 1
                        ? "Finish Quiz"
                        : "Next Question"}
                </button>
            </div>
        </div>
    );
};

export default QuizApp;