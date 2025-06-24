import { GraduationCap, Code } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center mb-16 gradient-text">Education</h2>
        
        <div className="space-y-8">
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl">
                <GraduationCap />
              </div>
              <div className="flex-1">
                <h3 className="font-poppins font-semibold text-xl mb-2">Bachelor of Commerce (B.Com)</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">Delhi University – School of Open Learning</p>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Final Year</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-xl">
                <Code />
              </div>
              <div className="flex-1">
                <h3 className="font-poppins font-semibold text-xl mb-2">Full-Stack Development Program</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Comprehensive web development training</p>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Firebase', 'Git', 'Vercel'].map((tech) => (
                    <span key={tech} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
