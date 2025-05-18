import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="font-heading font-bold text-xl">
          <span className="text-primary">Anbu</span><span className="text-secondary">Sivam</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
          <a href="#experience" className="hover:text-primary transition-colors duration-300">Experience</a>
          <a href="#skills" className="hover:text-primary transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
          <ThemeToggle />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white dark:bg-gray-800 transition-all duration-300 shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
          <a href="#about" className="py-2 hover:text-primary transition-colors duration-300" onClick={closeMobileMenu}>About</a>
          <a href="#experience" className="py-2 hover:text-primary transition-colors duration-300" onClick={closeMobileMenu}>Experience</a>
          <a href="#skills" className="py-2 hover:text-primary transition-colors duration-300" onClick={closeMobileMenu}>Skills</a>
          <a href="#projects" className="py-2 hover:text-primary transition-colors duration-300" onClick={closeMobileMenu}>Projects</a>
          <a href="#contact" className="py-2 hover:text-primary transition-colors duration-300" onClick={closeMobileMenu}>Contact</a>
          <ThemeToggle isMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
