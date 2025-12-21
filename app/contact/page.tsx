export const metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me.",
};

export default function Contact() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Get In Touch
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="space-y-8">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Email
                  </h3>
                  <a
                    href="mailto:hryoo2004@gmail.com"
                    className="mt-1 block text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300 transition-colors"
                  >
                    hryoo2004@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    GitHub
                  </h3>
                  <a
                    href="https://github.com/hojin-ryoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300 transition-colors"
                  >
                    github.com/hojin-ryoo
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    LinkedIn
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/hojinryoo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300 transition-colors"
                  >
                    linkedin.com/in/hojinryoo/
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Send a Message
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Feel free to reach out via email or connect with me on social media.
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
