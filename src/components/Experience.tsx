import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    title: "Lead Full Stack & DevOps Engineer at WeMean",
    period: "2024.10 – now",
    location: "JavaScript/TypeScript Stack",
    icon: "🚀",
    details: "Assessed risks and estimated work hours for new features, providing management with a clear understanding of potential issues and possible solutions. Managed infrastructure and proactively informed management about potential problems such as rising maintenance costs, while proposing alternative solutions. Reviewed the codebase to improve code quality and reduce the risk of unwanted errors."
  },
  {
    title: "JavaScript/TypeScript Software Engineer at WeMean",
    period: "2023.04 – 2024.10",
    location: "JavaScript/TypeScript Stack",
    icon: "⚙️",
    details: "Migrated microservices from TCP to gRPC, improving code readability and enabling strict type checking. Led the development team, ensuring high code quality and fast feature delivery. Focused on architectural improvements and team leadership."
  },
  {
    title: "Front-end Developer at Obmify",
    period: "2023.05 – 2023.07",
    location: "Remote",
    icon: "💻",
    details: "Developed a partner dashboard from scratch, improving transparency for project partners. Focused on creating intuitive user interfaces and enhancing partner experience through modern frontend technologies."
  },
  {
    title: "Full Stack Developer at RekinySukcesu",
    period: "2022.03 – 2025.01",
    location: "JavaScript/TypeScript",
    icon: "🔧",
    details: "Developed and maintained over five projects using a custom CMS built by our team. Contributed to server management services, which ensured greater transparency for developers, reduced the number of unpredictable situations, and improved code quality. Actively participated in internal company processes: introduced mandatory code reviews, established Git workflow standards, and contributed ideas during brainstorming sessions to enhance operational efficiency. Migrated a VPS with an unsupported OS version to a newer one, ensuring the highest level of security."
  },
  {
    title: "Full Stack Developer at AzurAgro",
    period: "2020.03 – 2022.02",
    location: "WordPress & Custom Development",
    icon: "🌱",
    details: "Designed and developed an informational website based on WordPress that outperformed competitors' sites in UX/UI. Provided smooth support and continuous feature delivery to the client. Focused on creating superior user experience and maintaining high-quality code standards."
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
