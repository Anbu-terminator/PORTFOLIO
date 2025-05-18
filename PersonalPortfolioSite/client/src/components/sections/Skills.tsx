interface SkillBar {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  colorClass: string;
  skills: SkillBar[];
}

interface LanguageCard {
  name: string;
  level: string;
  statusClass: string;
  progressFill: number; // 1-5 units, 5 being full fluency
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Web",
    icon: "fa-code",
    colorClass: "text-primary",
    skills: [
      { name: "Java, Python, C++", percentage: 85 },
      { name: "HTML, CSS, Bootstrap", percentage: 90 },
      { name: "JavaScript, React.js", percentage: 80 },
      { name: "Node.js, Express.js", percentage: 75 },
      { name: "MySQL, MERN Stack", percentage: 80 },
      { name: "Git/GitHub", percentage: 85 }
    ]
  },
  {
    title: "Tools & Software",
    icon: "fa-screwdriver-wrench",
    colorClass: "text-secondary",
    skills: [
      { name: "Power BI, MATLAB", percentage: 75 },
      { name: "Arduino UNO, VHDL", percentage: 85 },
      { name: "Unity (basic)", percentage: 60 },
      { name: "Office 365", percentage: 90 },
      { name: "Content Writing", percentage: 80 },
      { name: "Video Editing", percentage: 75 }
    ]
  },
  {
    title: "Soft Skills",
    icon: "fa-brain",
    colorClass: "text-accent",
    skills: [
      { name: "Public Speaking", percentage: 90 },
      { name: "Communication", percentage: 95 },
      { name: "Teamwork", percentage: 85 },
      { name: "Logical Thinking", percentage: 90 },
      { name: "Problem Solving", percentage: 85 },
      { name: "Time Management", percentage: 80 }
    ]
  }
];

const languages: LanguageCard[] = [
  {
    name: "English",
    level: "Fluent",
    statusClass: "bg-blue-50 dark:bg-blue-900/30 text-primary",
    progressFill: 5
  },
  {
    name: "Tamil",
    level: "Fluent",
    statusClass: "bg-blue-50 dark:bg-blue-900/30 text-primary",
    progressFill: 5
  },
  {
    name: "Hindi",
    level: "Basic",
    statusClass: "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    progressFill: 2
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="number">03.</span> Skills
          <span className="line"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300" data-animation="skills-card">
              <div className="flex items-center mb-6">
                <i className={`fa-solid ${category.icon} text-2xl ${category.colorClass} mr-3`}></i>
                <h3 className="text-xl font-heading font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className={category.colorClass}>{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className={`progress-bar-fill ${index === 1 ? 'secondary' : index === 2 ? 'accent' : ''}`} 
                        style={{ width: `${skill.percentage}%` }} 
                        data-width={skill.percentage}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Languages */}
        <div className="mt-12">
          <h3 className="text-xl font-heading font-semibold mb-6">Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 transition-transform duration-300 hover:-translate-y-1" data-animation="language-card">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium">{language.name}</h4>
                  <span className={`px-3 py-1 ${language.statusClass} rounded-full text-sm`}>{language.level}</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-1/5 h-2 ${i < language.progressFill ? 
                        (language.level === 'Basic' ? 'bg-green-500' : 'bg-primary') : 
                        'bg-gray-200 dark:bg-gray-700'} 
                        ${i === 0 ? 'rounded-l-full' : ''} 
                        ${i === 4 ? 'rounded-r-full' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
