import { tasks } from "../Home";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1e3a8a,#0f172a,#020617)] text-white px-4 py-12">

            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">
                        All Projects 🚀
                    </h1>

                    <p className="text-gray-400">
                        Explore all React + Tailwind projects
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {tasks.map((task) => (
                        <Link
                            key={task.name}
                            to={task.path}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">
                                {task.icon}
                            </div>

                            <h2 className="text-2xl font-semibold mb-2">
                                {task.name}
                            </h2>

                            <p className="text-gray-400 text-sm">
                                Click to open project
                            </p>

                        </Link>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Projects