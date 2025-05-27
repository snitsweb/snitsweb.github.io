const About = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About</h2>
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
            I'm a Lead Full Stack & DevOps Engineer with extensive experience in JavaScript/TypeScript stack. 
            I specialize in building scalable web applications, managing infrastructure, and leading development teams. 
            My expertise spans from frontend frameworks like Vue.js, Nuxt.js, React.js, and Next.js to backend 
            technologies including Node.js, Nest.js, Express.js, and various databases.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
            Throughout my career, I've successfully migrated microservices to gRPC, improved code quality through 
            mandatory code reviews, and managed infrastructure with Docker, Kubernetes, and Terraform. I'm passionate 
            about DevOps practices, having implemented CI/CD pipelines and maintained high-availability systems.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg max-w-4xl">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What I'm Looking For</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm seeking opportunities that offer stability and growth, where I can be involved in making technical decisions. 
              A flexible schedule is important to me, and I would prefer official employment in Poland. Professional development 
              opportunities and courses would be a significant plus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
