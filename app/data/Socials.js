import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

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
    "href": "/Brian_Resume.pdf",
    "icon": <IoDocumentText className="text-3xl" />,
    "label": "Download CV",
  },
]

export default links