import links from "app/data/Socials"
import projects from "app/data/Projects"
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mt-40 flex flex-col gap-y-8">
          <div className="text-5xl font-bold">
            Hi! I'm Brian Lin
          </div>
          <div className="text-2xl font-bold">
            About Me
          </div>
          <div className="h-screen flex flex-col gap-y-6 w-3/4">
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
        <div className="h-screen flex flex-col gap-y-16 items-center">
          <div className="text-5xl font-bold">
            Projects
          </div>
          <div className="flex flex-wrap justify-evenly gap-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} title={project.title} link={project.link} description={project.description} techs={project.techs} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
