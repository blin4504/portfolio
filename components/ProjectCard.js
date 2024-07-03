export default function ProjectCard({ title, link, description, techs }) {
  return (
    <div className="flex items-center p-4 border-2 border-solid border-color_text max-w-md flex-col gap-y-3 hover:shadow-custom_shadow hover:shadow-color_text">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        {title}
      </a>
      <div>
        {description}
      </div>
      <div className="flex text-xs gap-2">
        {techs.map((tech, index) => (
          <div key={index} className="p-1 bg-color_text text-color_background">
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}