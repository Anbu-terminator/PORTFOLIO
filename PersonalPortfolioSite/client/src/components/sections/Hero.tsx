const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545972154-9bb223aac798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-12 md:mb-0" data-animation="hero-content">
          <p className="text-primary font-mono text-lg mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Anbu Sivam B
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading text-gray-600 dark:text-gray-300 mb-6">
            PCB Designer & Full Stack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
            Based in Tiruvannamalai, Tamil Nadu, India. Creating innovative solutions through hardware design and web development.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#contact" className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center">
              <i className="fa-solid fa-envelope mr-2"></i> Contact Me
            </a>
            <a href="https://drive.google.com/drive/folders/1fSRai776G7JNauEThcb4RTX1zfOnmIy4?usp=sharing" className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium py-3 px-6 rounded-lg shadow-sm transition-colors duration-300 flex items-center border border-gray-200 dark:border-gray-700">
              <i className="fa-solid fa-download mr-2"></i> Download Resume
            </a>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="https://linkedin.com/in/bast101" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Anbu-terminator" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="tel:9790155280" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://linktr.ee/Bast101" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300">
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center" data-animation="hero-image">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-10 animate-pulse"></div>
             <img 
              src="/images/profile-hero.jpg" 
              alt="Anbu Sivam B" 
              className="rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
