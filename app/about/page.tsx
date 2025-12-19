export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about my background, skills, and experience.",
};

export default function About() {
  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Git",
    "UI/UX Design",
    "Database Design",
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "Company Name",
      period: "2022 - Present",
      description:
        "Building modern web applications and contributing to open-source projects.",
    },
    {
      role: "Frontend Developer",
      company: "Previous Company",
      period: "2020 - 2022",
      description:
        "Developed responsive user interfaces and improved user experience.",
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
              Hello! I'm a passionate developer who loves building modern web
              applications and sharing knowledge through writing. I enjoy
              working with cutting-edge technologies and solving complex
              problems.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              When I'm not coding, you can find me reading tech blogs, exploring
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
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
