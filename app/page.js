import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 flex flex-col gap-y-5">
        <p className="text-3xl font-bold">Hi! I'm Brian Lin</p>
        <p className="text-2xl font-bold">About Me</p>
        <div className="h-screen w-1/2">
          <article>
            Hello! I am a computer science student at RIT with a passion for
            backend development and distributed systems. I enjoy self-teaching
            myself computer science and learning about new technologies. When
            I'm not coding, you can find me watching movies, hanging out with
            friends, or exploring new culinary experiences. Welcome to my corner
            of the web!
          </article>
          <div className="flex gap-6">
            <a
              href="https://github.com/blin4504"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaGithub className="text-3xl" />
              <span className="ml-2">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/brian-lin2001/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaLinkedin className="text-3xl" />
              <span className="ml-2">LinkedIn</span>
            </a>
            <a
              href="mailto:linbrian359@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <MdEmail className="text-3xl" />
              <span className="ml-2">Email</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
