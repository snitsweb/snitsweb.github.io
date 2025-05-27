import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript", "Vue.js", "Nuxt.js", "React.js", "Next.js"],
    icon: "🎨"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Nest.js", "Express.js", "Fastify.js", "Hono.js", "Bun", "PHP", "GoLang"],
    icon: "⚙️"
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite", "InfluxDB"],
    icon: "🗄️"
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Terraform", "Helm", "GitLab CI/CD", "GitHub Actions", "Nginx"],
    icon: "🚀"
  },
  {
    title: "APIs & Protocols",
    skills: ["gRPC", "Zod", "Swagger", "Telegram Bot API", "REST APIs"],
    icon: "🔗"
  },
  {
    title: "Testing & Build",
    skills: ["Jest", "Vitest", "Bun tests", "Vite", "Webpack", "Gulp"],
    icon: "🧪"
  },
  {
    title: "Other",
    skills: ["TypeORM", "Handlebars", "Capacitor", "n8n", "Cloudflare"],
    icon: "🛠️"
  }
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-700 rounded-lg p-6 border dark:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-base px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
