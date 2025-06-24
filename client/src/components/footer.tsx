
export function Footer() {
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

  return (
    <footer className="bg-slate-50 dark:bg-slate-800 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="font-poppins font-bold text-2xl gradient-text mb-4">Priyanshu Mishra</div>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Made with 💻 by Priyanshu Mishra</p>
          <p className="text-slate-500 dark:text-slate-500 italic">"Ctrl + Z is my therapy."</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="bubble-button text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded relative z-10"
          >
            <span className="relative z-20">Home</span>
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="bubble-button text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded relative z-10"
          >
            <span className="relative z-20">About</span>
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="bubble-button text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded relative z-10"
          >
            <span className="relative z-20">Skills</span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="bubble-button text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded relative z-10"
          >
            <span className="relative z-20">Projects</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bubble-button text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded relative z-10"
          >
            <span className="relative z-20">Contact</span>
          </button>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © 2024 Priyanshu Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
