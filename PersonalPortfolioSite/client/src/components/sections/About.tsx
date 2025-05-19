const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2" data-animation="about-content">
            <h2 className="section-heading">
              <span className="number">01.</span> About Me
              <span className="line"></span>
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a highly motivated and detail-oriented Electronics and Communication Engineer with a passion for PCB design and full-stack development.
              </p>
              <p>
                Known for delivering high-quality results in fast-paced environments, I combine strong technical expertise with excellent communication and teamwork skills.
              </p>
              <p>
                I'm committed to continuous learning and am driven by challenges that offer both personal and organizational growth. My diverse skill set allows me to bridge the gap between hardware and software solutions.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-heading font-semibold mb-4">Education</h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg">
                <h4 className="text-lg font-semibold text-primary">Bachelor of Engineering in Electronics and Communication</h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">S.K.P Engineering College (Affiliated to Anna University)</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">2022 – 2026</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex items-center justify-center" data-animation="about-image">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-lg -z-10 blur-sm"></div>
              <img 
                src="/images/profile-about.jpg" 
                alt="Anbu Sivam B" 
                className="rounded-lg shadow-lg w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
