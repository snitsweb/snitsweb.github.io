
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    title: "Lead Software Engineer at Figma",
    period: "2020-Now",
    location: "San Francisco, CA",
    icon: "💼",
    details: "Leading a team of 8 engineers working on core product features. Responsible for architectural decisions, code reviews, and mentoring junior developers. Implemented new collaboration features that increased user engagement by 40%. Technologies: React, TypeScript, Node.js, PostgreSQL."
  },
  {
    title: "Software Engineer at Figma",
    period: "2019-2020",
    location: "San Francisco, CA",
    icon: "⚙️",
    details: "Developed and maintained key features for the design collaboration platform. Built real-time commenting system and improved performance of the vector editing engine. Collaborated with designers and product managers to deliver user-focused solutions. Technologies: JavaScript, React, WebGL, Redis."
  },
  {
    title: "DevOps Engineer at Figma",
    period: "2018-2019",
    location: "San Francisco, CA",
    icon: "🔧",
    details: "Managed cloud infrastructure and deployment pipelines. Implemented CI/CD processes that reduced deployment time by 60%. Set up monitoring and alerting systems for production environments. Worked with Docker, Kubernetes, and AWS services to ensure high availability."
  },
  {
    title: "Software Engineer at Dropbox",
    period: "2017-2018",
    location: "San Francisco, CA",
    icon: "💻",
    details: "Worked on file synchronization and sharing features. Optimized file upload algorithms that improved sync speed by 35%. Collaborated with cross-functional teams to deliver mobile and web applications. Technologies: Python, Go, React, MySQL."
  },
  {
    title: "Software Engineering Intern at Facebook",
    period: "2016",
    location: "Menlo Park, CA",
    icon: "🎓",
    details: "Developed internal tools for the engineering team during a 3-month internship. Built a dashboard for tracking code review metrics and team productivity. Gained experience with large-scale systems and learned best practices for software development in a fast-paced environment."
  }
];

const Experience = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {experiences.map((exp, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-none"
              >
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  <div className="ml-16 bg-gray-50 dark:bg-gray-800 rounded-lg border dark:border-gray-700">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <div className="flex items-start gap-4 w-full">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                          {exp.icon}
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {exp.period} • {exp.location}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="ml-16 pt-2">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {exp.details}
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Experience;
