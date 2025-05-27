
const experiences = [
  {
    title: "Lead Software Engineer at Figma",
    period: "2020-Now",
    location: "San Francisco, CA",
    icon: "💼"
  },
  {
    title: "Software Engineer at Figma",
    period: "2019-2020",
    location: "San Francisco, CA",
    icon: "⚙️"
  },
  {
    title: "DevOps Engineer at Figma",
    period: "2018-2019",
    location: "San Francisco, CA",
    icon: "🔧"
  },
  {
    title: "Software Engineer at Dropbox",
    period: "2017-2018",
    location: "San Francisco, CA",
    icon: "💻"
  },
  {
    title: "Software Engineering Intern at Facebook",
    period: "2016",
    location: "Menlo Park, CA",
    icon: "🎓"
  }
];

const Experience = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                {exp.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {exp.period} • {exp.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
