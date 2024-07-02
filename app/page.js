import { FaGithub, FaLinkedin, FaLongArrowAltDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

import Button from "@/components/Button";


export default function Home() {

  const links = [
    {
      "href": "https://github.com/blin4504",
      "icon": <FaGithub className="text-3xl" />,
      "label": "GitHub",
    },
    {
      "href": "https://www.linkedin.com/in/brian-lin2001/",
      "icon": <FaLinkedin className="text-3xl" />,
      "label": "LinkedIn",
    },
    {
      "href": "mailto:linbrian359@gmail.com",
      "icon": <MdEmail className="text-3xl" />,
      "label": "Email",
    },
    {
      "href": "https://google.com",
      "icon": <IoDocumentText className="text-3xl" />,
      "label": "Download CV",
    },
    {
      "href": "https://google.com",
      "icon": <FaLongArrowAltDown className="text-3xl" />,
      "label": "Projects"
    },
  ]

  return (
    <>
      <div className="container mx-auto px-4 flex flex-col gap-y-5">
        <p className="text-5xl font-bold">Hi! I'm Brian Lin</p>
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
          <div className="flex gap-6 flex-wrap">
            {links.map((link, index) => (
              <Button key={index} href={link.href} label={link.label}>
                {link.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
