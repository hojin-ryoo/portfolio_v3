export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about my background, skills, and experience.",
};

export default function About() {
  const skills = [
    "Generative AI",
    "TypeScript/JavaScript",
    "Python",
    "React/Next.js",
    "Terraform",
    "Azure",
    "AWS",
    "GCP",
    "Java",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "Machine Learning",
    "git",
    "DevOps",
    "Quarkus",
    "Angular",
    "Spring Boot",
    "Databricks",
    "SQL",
    "Cursor"
  ];

  const experience = [
    {
      role: "Lead AI Full Stack Engineer | Senior Associate",
      company: "PwC",
      period: "August 2025 - Present",
      bullets: [
        "Deliver AI powered solutions to clients",
        "Develop and deploy multi-tenant cloud infrastructure",
        "Engineer agents and agentic workflows to solve complex business problems",
        "Optimize agents through context engineering",
        "Pilot the latest and greatest tools for software development, productivity, and automation",
        "Tech Lead for current product",
      ],
    },
    {
      role: "AI/ML Engineer",
      company: "General Motors",
      period: "September 2023 - August 2025",
      bullets: [
        "Increased engineering productivity by 80% by engineering a platform for developers to interact with foundational LLM models hosted in Azure, delivering 10 successful proof of concept projects centered around streamlining engineering workflows with Retrieval Augmented Generation (RAG) based LLM solutions",
        "Reduced deployment durations by 80% by transitioning infrastructure CI/CD pipelines from a proprietary IaC solution to Terraform on Azure, decreasing service downtime by 50%",
        "Doubled user engagement by developing a no-code model runner for ML models deployed on Databricks, which led to multiple high visibility projects being assigned to our development team",
        "Achieved a 95% reduction in physics simulation runtime through the development of Multi-Layer Perceptron, GNN, and CatBoost machine learning models, leading to a 20% reduction in high performance compute costs",
        "Cut data cleaning development time by 40% with a data profiler app that automatically records file metadata during data ingestion, increasing development team productivity by 10%",
        "Decreased data sourcing time by 80% by developing an application to streamline the complex output of physics simulations and centralize all related data storage, improving engineering productivity by 30%",
        "Served as a subject matter expert and internal consultant on Generative AI, Machine Learning, and Cloud Computing, regularly meeting with teams and stakeholders to provide strategic guidance and technical insights",
        "Recognized among the top 5% of engineers company-wide for performance and impact",
      ],
    },
    {
      role: "Software Engineer",
      company: "General Motors",
      period: "May 2021 - August 2023",
      bullets: [
        "Enhanced application performance by 20% by spearheading the successful migration of multiple legacy applications from Oracle to PostgreSQL, reducing database licensing costs by $50,000 per project",
        "Boosted application performance by 30% through the strategic implementation of microservices, batch jobs, event-driven architecture, Docker containerization, and Kubernetes orchestration, increasing positive user feedback by 10%",
        "Developed applications using Spring Boot, Quarkus, and Angular to streamline data entry and validation for testing",
        "Recognized among the top 10% of engineers company-wide for performance and impact",
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            About Me
          </h1>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="mb-12">
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Hello! I&apos;m a passionate developer who loves building modern web
              applications and sharing knowledge through writing. I enjoy
              working with cutting-edge technologies and solving complex
              problems.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              When I&apos;m not coding, you can find me reading tech blogs, exploring
              new frameworks, or contributing to open-source projects. I believe
              in continuous learning and staying up-to-date with the latest
              industry trends.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
