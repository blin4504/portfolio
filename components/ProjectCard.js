export default function ProjectCard({ title, link, description, techs }) {
  return (
    <div className="flex flex-col items-center p-4 border-2 border-solid border-color_text max-w-xs sm:max-w-md gap-y-3 hover:shadow-custom_shadow hover:shadow-color_text">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center"
      >
        <div className="underline text-lg">{title}</div>
        <div className="mt-2">{description}</div>
        <div className="flex flex-wrap justify-center text-xs gap-2 mt-2">
          {techs.map((tech, index) => (
            <div key={index} className="p-1 bg-color_text text-color_background">
              {tech}
            </div>
          ))}
        </div>
      </a>
    </div>
  )
}