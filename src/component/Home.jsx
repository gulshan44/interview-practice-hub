import { useState } from "react";
import { Link } from "react-router-dom";

export const tasks = [
  { name: "Counter", path: "/counter", icon: "🔢" },
  { name: "To-Do List", path: "/todolist", icon: "📝" },
  { name: "Login Form", path: "/login", icon: "🔐" },
  { name: "Background Changer", path: "/backgroundchanger", icon: "🎨" },
  { name: "Show/Hide Text", path: "/toggletext", icon: "👁️" },
  { name: "Real Time Input Mirror", path: "/inputmirror", icon: "⌨️" },
  { name: "Testimonial", path: "/testimonial", icon: "💬" },
  { name: "Weather", path: "/weather", icon: "🌤️" },
  { name: "Search Filter", path: "/searchfilter", icon: "🔍" },
  { name: "Password Generator", path: "/passwordgenerator", icon: "🔑" },
  { name: "Stop Watch", path: "/stopwatch", icon: "⏱️" },
  { name: "Accordion", path: "/accordion", icon: "📂" },
  { name: "Quiz App", path: "/quizapp", icon: "❓" },
  { name: "QR Code Generator", path: "/qrgenerator", icon: "📱" },
  { name: "Expense Tracker", path: "/expensetracker", icon: "💰" },
];

export default function Home() {

  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1e3a8a,#0f172a,#020617)] text-white">

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-7">

        <div className="text-center">

          <div className="mt-5 flex justify-center pb-7">
            <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-gray-300">
              👨‍💻 Developed by <span className="text-blue-400 font-semibold">Gulshan Verma</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Interview Practice Hub 🚀
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Practice common frontend interview tasks built with React and
            Tailwind CSS. Improve your skills with real-world mini projects.
          </p>

          <div className="w-full max-w-md mx-auto mt-8">
            <input
              type="text"
              placeholder="Search Projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 text-sm sm:text-base rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="mt-4 text-gray-400">
              Showing {filteredTasks.length} Projects
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-5">

            <span className="px-4 sm:px-5 py-2 text-sm rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300">
              {tasks.length} Projects
            </span>

            <span className="px-4 sm:px-5 py-2 text-sm rounded-full bg-green-500/20 border border-green-500/30 text-green-300">
              React
            </span>

            <span className="px-4 sm:px-5 py-2 text-sm rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300">
              Tailwind CSS
            </span>

          </div>

        </div>

        {/* Projects Grid */}

        {filteredTasks.length === 0 ? (

          <div className="text-center py-20">
            <h2 className="text-5xl mb-4">
              😢
            </h2>

            <p className="text-gray-400 text-lg">
              No project found
            </p>
          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14">

            {filteredTasks.map((task) => (

              <Link
                key={task.name}
                to={task.path}
                className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50"
              >

                {/* Featured Badge */}
                {(task.name === "Expense Tracker" ||
                  task.name === "Weather") && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-xs px-3 py-1 rounded-full shadow-lg">
                      🔥 Featured
                    </span>
                  )}

                <div className="text-4xl sm:text-5xl mb-4">
                  {task.icon}
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  {task.name}
                </h2>

                <p className="text-gray-400 text-sm">
                  Click to open project
                </p>

              </Link>

            ))}

          </div>

        )}

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 border-t border-white/10 pt-6 sm:pt-8 px-4">

          <p className="text-gray-400">
            Built with React ⚛️ + Tailwind CSS 🎨
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Interview Practice Projects Collection
          </p>

        </div>

      </div>
    </div>
  );
}