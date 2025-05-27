
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript", "Python", "Ruby", "React", "Node.js",
  "GraphQL", "PostgreSQL", "Docker", "Kubernetes", "Terraform"
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-700 rounded-lg border dark:border-gray-600 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-sm">⚡</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
