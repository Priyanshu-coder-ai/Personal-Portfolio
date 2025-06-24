import { GraduationCap, Code, Rocket, Heart, Laptop, Server, Wrench, Brain } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-16 gradient-text">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a developer with a background in commerce and a passion for coding. I've built multiple real-world projects using React, Node.js, MongoDB, and more. I enjoy creating things that are both functional and fun — from chatbots to meme tools.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-blue-500 text-xl" />
                <span>Currently pursuing B.Com (Final Year) from DU SOL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="text-emerald-500 text-xl" />
                <span>Learning full-stack development from an institute</span>
              </div>
              <div className="flex items-center space-x-3">
                <Rocket className="text-amber-500 text-xl" />
                <span>Experience in building full-stack apps and personal tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="text-red-500 text-xl" />
                <span>Interests: Web Dev, UI/UX, Creative Building</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="zoom-column bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <Laptop className="text-3xl text-blue-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Frontend</h3>
              <p className="text-slate-600 dark:text-slate-400">React, JavaScript, Tailwind CSS</p>
            </div>
            <div className="zoom-column bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <Server className="text-3xl text-emerald-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Backend</h3>
              <p className="text-slate-600 dark:text-slate-400">Node.js, Express, MongoDB</p>
            </div>
            <div className="zoom-column bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <Wrench className="text-3xl text-amber-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Tools</h3>
              <p className="text-slate-600 dark:text-slate-400">Git, VS Code, Vercel</p>
            </div>
            <div className="zoom-column bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <Brain className="text-3xl text-purple-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">AI/APIs</h3>
              <p className="text-slate-600 dark:text-slate-400">Gemini, OpenAI, Weather APIs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
