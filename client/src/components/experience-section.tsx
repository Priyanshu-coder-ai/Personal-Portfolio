import { CheckCircle } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-16 gradient-text">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-500"></div>
          
          {/* Experience Item */}
          <div className="relative flex items-center mb-8">
            <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800"></div>
            <div className="ml-12 md:ml-0 md:w-full">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-poppins font-semibold text-lg">Independent Developer</h3>
                  <span className="text-sm text-blue-500 font-medium">2024 – Present</span>
                </div>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-1 w-4 h-4 flex-shrink-0" />
                    <span>Working on personal projects using modern web technologies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-1 w-4 h-4 flex-shrink-0" />
                    <span>Familiar with project deployment, Git workflows, and API integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-1 w-4 h-4 flex-shrink-0" />
                    <span>Built and deployed multiple full-stack applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-1 w-4 h-4 flex-shrink-0" />
                    <span>Experienced in integrating AI APIs and third-party services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
