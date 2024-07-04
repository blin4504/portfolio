import links from "app/data/Socials"
import projects from "app/data/Projects"
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {

  return (
    <>
      <div className="container mx-auto px-4 flex flex-col">
        
        {/** About Me Section */}
        <div className="h-screen flex flex-col gap-y-8 mb-40 sm:mb-0">
          <div className="mt-40 text-3xl font-bold sm:text-5xl">Hi! I'm Brian Lin</div>
          <div className="text-xl font-bold sm:text-2xl">About Me</div>
          <div className="flex flex-col gap-y-6 w-full sm:w-3/4 flex-grow">
            <article className="text-sm sm:text-base">
              Hello! I am a computer science student at RIT with a passion for
              backend development and distributed systems. I enjoy self-teaching
              myself computer science and learning about new technologies. When
              I'm not coding, you can find me watching movies, hanging out with
              friends, or exploring new culinary experiences. Welcome to my corner
              of the web!
            </article>
            <div className="flex flex-col gap-2 flex-wrap sm:flex-row sm:gap-6">
              {links.map((link, index) => (
                <Button key={index} href={link.href} label={link.label}>
                  {link.icon}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/** Project Section */}
        <div className="flex flex-col gap-y-16 items-center flex-grow pb-16 sm:pb-32 mt-10">
          <div className="text-3xl font-bold sm:text-5xl">
            Projects
          </div>
          <div className="flex flex-wrap justify-center sm:justify-evenly gap-4 sm:gap-y-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} title={project.title} link={project.link} description={project.description} techs={project.techs} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
