import { Download, ExternalLink, Mail } from "lucide-react";
// Add your profile photo import here:
// import profilePhoto from "@/assets/profile.jpg";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const downloadResume = () => {
    // TODO: Replace with actual resume file URL
    alert('Resume download will be available soon!');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          {/* Option 1: Your profile photo */}
          {/* <img 
            src={profilePhoto} 
            alt="Priyanshu Mishra" 
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-xl animate-float"
          /> */}
          
          {/* Option 2: Keep gradient with your initial */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-6xl font-bold animate-float">
            P
          </div>
        </div>
        
        <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 animate-slide-up">
          Hi, I'm <span className="gradient-text">Priyanshu</span> — I build websites, apps, and sometimes memes.
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 animate-slide-up delay-200">
          Full-Stack Developer | B.Com Final Year Student
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-400">
          <button
            onClick={() => scrollToSection('projects')}
            className="bubble-button bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 relative z-10"
          >
            <ExternalLink className="w-4 h-4 relative z-20" />
            <span className="relative z-20">View Projects</span>
          </button>
          <button
            onClick={downloadResume}
            className="bubble-button border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 relative z-10"
          >
            <Download className="w-4 h-4 relative z-20" />
            <span className="relative z-20">Download Resume</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bubble-button border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 relative z-10"
          >
            <Mail className="w-4 h-4 relative z-20" />
            <span className="relative z-20">Contact Me</span>
          </button>
        </div>
      </div>
    </section>
  );
}
