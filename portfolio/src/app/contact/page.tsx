export default function Contact() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600">
        
        <div className="flex flex-col items-center font-mono text-white space-y-4 mt-10">
          <p className="text-lg">
            I would love to hear from you! Feel free to reach out using any of the methods below:
          </p>
          <div className="text-center">
            <h2 className="text-xl font-bold">Email</h2>
            <p>
              <a
                href="mailto:16leog@gmail.com"
                className="text-blue-400 hover:underline"
              >
                16leog@gmail.com
              </a>
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">LinkedIn</h2>
            <p>
              <a
                href="https://www.linkedin.com/in/leonel-g/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/leonel-g
              </a>
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">GitHub</h2>
            <p>
              <a
                href="https://github.com/16leog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/16leog
              </a>
            </p>
          </div>
        </div>
      </main>
    );
  }
  