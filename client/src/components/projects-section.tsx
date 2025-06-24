import { ExternalLink, Github, Clock, Laugh, CloudSun, Bot, Chrome } from "lucide-react";
import { SiOpenjdk } from "react-icons/si";

export function ProjectsSection() {
  const projects = [
    {
      title: "Meme Studio",
      description: "A live meme posting and organizing app to manage, schedule, and share memes.",
      icon: <Laugh className="text-6xl text-white" />,
      gradient: "from-pink-400 to-red-500",
      technologies: [
        { name: "React", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Firebase", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "CSS", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" }
      ],
      hasLiveDemo: true,
      status: "live"
    },
    {
      title: "Weather App Kaii",
      description: "A real-time weather app with clean UI providing accurate weather information.",
      icon: <CloudSun className="text-6xl text-white" />,
      gradient: "from-blue-400 to-cyan-500",
      technologies: [
        { name: "React", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "CSS", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "Weather API", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" }
      ],
      hasLiveDemo: true,
      status: "live"
    },
    {
      title: "AI Chatbox – Kaii",
      description: "A custom chatbot powered by the Gemini API with dark mode and clean UI.",
      icon: <Bot className="text-6xl text-white" />,
      gradient: "from-purple-400 to-pink-500",
      technologies: [
        { name: "React", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Node.js", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "Gemini API", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" }
      ],
      hasLiveDemo: true,
      status: "live"
    },
    {
      title: "Meme Organizer Extension",
      description: "Chrome extension to collect, tag, and save memes (In Progress).",
      icon: <Chrome className="text-6xl text-white" />,
      gradient: "from-yellow-400 to-orange-500",
      technologies: [
        { name: "HTML", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "CSS", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "JavaScript", color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" }
      ],
      hasLiveDemo: false,
      status: "in-progress"
    },
    {
      title: "Car Rental + Hotel App",
      description: "Java project using Dropwizard + Maven, simulating a car and hotel listing system.",
      icon: <SiOpenjdk className="text-6xl text-white" />,
      gradient: "from-red-400 to-pink-500",
      technologies: [
        { name: "Java", color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
        { name: "Dropwizard", color: "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200" },
        { name: "Maven", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" }
      ],
      hasLiveDemo: false,
      status: "completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-16 gradient-text">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card zoom-column bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`${tech.color} px-2 py-1 rounded text-sm`}>
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.hasLiveDemo ? (
                    <button className="bubble-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200 flex items-center gap-2 relative z-10">
                      <ExternalLink className="w-4 h-4 relative z-20" />
                      <span className="relative z-20">Live Demo</span>
                    </button>
                  ) : project.status === "in-progress" ? (
                    <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      In Progress
                    </span>
                  ) : null}
                  <button className="bubble-button border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition-colors duration-200 flex items-center gap-2 relative z-10">
                    <Github className="w-4 h-4 relative z-20" />
                    <span className="relative z-20">{project.hasLiveDemo ? "Code" : "View Code"}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
