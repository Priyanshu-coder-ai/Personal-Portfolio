import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/logo.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          <img src={logoImage} alt="Logo" className="h-8 w-auto" />
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="bubble-button hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded relative z-10"
            >
              <span className="relative z-20">Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="bubble-button hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded relative z-10"
            >
              <span className="relative z-20">About</span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="bubble-button hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded relative z-10"
            >
              <span className="relative z-20">Skills</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="bubble-button hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded relative z-10"
            >
              <span className="relative z-20">Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bubble-button hover:text-blue-500 transition-colors duration-200 px-3 py-2 rounded relative z-10"
            >
              <span className="relative z-20">Contact</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div 
              className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
              onClick={toggleTheme}
            />
            <button 
              className="bubble-button md:hidden text-2xl p-2 rounded relative z-10" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="relative z-20">{isMenuOpen ? <X /> : <Menu />}</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="bubble-button hover:text-blue-500 transition-colors duration-200 text-left px-3 py-2 rounded relative z-10 w-full"
              >
                <span className="relative z-20">Home</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="bubble-button hover:text-blue-500 transition-colors duration-200 text-left px-3 py-2 rounded relative z-10 w-full"
              >
                <span className="relative z-20">About</span>
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="bubble-button hover:text-blue-500 transition-colors duration-200 text-left px-3 py-2 rounded relative z-10 w-full"
              >
                <span className="relative z-20">Skills</span>
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="bubble-button hover:text-blue-500 transition-colors duration-200 text-left px-3 py-2 rounded relative z-10 w-full"
              >
                <span className="relative z-20">Projects</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bubble-button hover:text-blue-500 transition-colors duration-200 text-left px-3 py-2 rounded relative z-10 w-full"
              >
                <span className="relative z-20">Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
