interface Achievement {
  icon: string;
  count: number;
  title: string;
  iconBgClass: string;
  counterColor: string;
}

const achievements: Achievement[] = [
  {
    icon: "fa-chalkboard-user",
    count: 30,
    title: "National Conferences Attended",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/30",
    counterColor: "text-primary"
  },
  {
    icon: "fa-file-signature",
    count: 10,
    title: "Research Papers Presented",
    iconBgClass: "bg-green-100 dark:bg-green-900/30",
    counterColor: "text-green-600 dark:text-green-400"
  },
  {
    icon: "fa-trophy",
    count: 20,
    title: "Presentation Competitions Won",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/30",
    counterColor: "text-accent"
  },
  {
    icon: "fa-handshake",
    count: 15,
    title: "Successful Team Projects",
    iconBgClass: "bg-amber-100 dark:bg-amber-900/30",
    counterColor: "text-amber-600 dark:text-amber-400"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="number">05.</span> Achievements
          <span className="line"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg" 
              data-animation="achievement-card"
            >
              <div className={`w-20 h-20 ${achievement.iconBgClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`fa-solid ${achievement.icon} text-3xl ${achievement.icon === 'fa-trophy' ? 'text-accent' : achievement.icon === 'fa-chalkboard-user' ? 'text-primary' : ''}`}></i>
              </div>
              <h3 className={`text-5xl font-bold ${achievement.counterColor} mb-2`} data-count={achievement.count}>0</h3>
              <p className="text-gray-700 dark:text-gray-300">{achievement.title}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8" data-animation="achievement-testimonial">
          <div className="flex items-start">
            <i className="fa-solid fa-quote-left text-3xl text-primary/30 dark:text-primary/20 mr-4"></i>
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                Demonstrated excellence in communication, research, and analysis through active participation in academic conferences and competitions. Consistently recognized for innovative approaches and strong presentation skills.
              </p>
              <p className="font-medium">
                Recent achievements include leadership roles in multiple internships and successful delivery of client projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
