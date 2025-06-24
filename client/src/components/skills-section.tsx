import { Laptop, Server, Wrench, Brain } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Laptop className="text-blue-500 text-2xl" />,
      bgColor: "bg-blue-100 dark:bg-blue-900",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <Server className="text-emerald-500 text-2xl" />,
      bgColor: "bg-emerald-100 dark:bg-emerald-900",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "PHP (basic)"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-amber-500 text-2xl" />,
      bgColor: "bg-amber-100 dark:bg-amber-900",
      skills: ["VS Code", "Git", "GitHub", "Replit", "Vercel"]
    },
    {
      title: "APIs & Extras",
      icon: <Brain className="text-purple-500 text-2xl" />,
      bgColor: "bg-purple-100 dark:bg-purple-900",
      skills: ["Gemini API", "OpenAI API", "Weather APIs", "Problem-solving", "Self-learning"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-16 gradient-text">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="zoom-column bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="font-poppins font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-tag bg-slate-100 dark:bg-slate-600 px-3 py-2 rounded-lg text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
