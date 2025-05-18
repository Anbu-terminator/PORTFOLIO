const experienceData = [
  {
    company: "CT Tech Solutions",
    role: "Founder & CEO",
    description: "Leading a tech startup focused on custom software and hardware solutions."
  },
  {
    company: "GAO Tek Inc",
    role: "IoT & Software Intern",
    description: "Worked on IoT device integration and software development projects."
  },
  {
    company: "IRON GLASS BYTES",
    role: "Software Engineer Intern",
    description: "Contributed to Bitcoin and blockchain-related projects."
  },
  {
    company: "Nova Spark Hub",
    role: "MERN Stack Developer Intern",
    description: "Built full-stack web applications using MongoDB, Express, React, and Node.js."
  },
  {
    company: "Web Stack Academy",
    role: "Android Developer Intern",
    description: "Developed mobile applications for Android using Java and Kotlin."
  },
  {
    company: "Multiple Other Internships",
    role: "Various Roles",
    description: "",
    list: [
      "Shadow Fox — Web Developer",
      "Oasis Infobyte — Android Developer",
      "CollegePur — Graphics Designer",
      "Mentorness — AI Intern, Content Writer, Platoon Leader",
      "YBI Foundation — Machine Learning Intern"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="number">02.</span> Work Experience
          <span className="line"></span>
        </h2>
        
        <div className="relative pl-10 md:pl-16 ml-4 md:ml-8 border-l-0" data-animation="timeline">
          {experienceData.map((item, index) => (
            <div key={index} className={`timeline-item relative pl-8 ${index === experienceData.length - 1 ? 'pb-0' : 'pb-12'}`}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.company}</h3>
                <p className="text-primary font-medium mt-1">{item.role}</p>
                {item.description && (
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                )}
                {item.list && (
                  <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    {item.list.map((listItem, i) => (
                      <li key={i}>• {listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
