function Projects() {
  return (
    <>
      {projectArr.map((project) => (
        <div key={project.title} className="grid h-[100dvh] grid-cols-2 items-center justify-items-center gap-4">
          <div className="flex max-w-sm flex-col gap-4">
            <h2 className="text-4xl font-bold">Project Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti placeat necessitatibus iusto a
              commodi exercitationem culpa.
            </p>
            <div className="flex gap-2">
              <a
                className="rounded-lg bg-gray-300 py-2 px-4"
                href="https://clarasmyth.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                className="py-2 px-4 underline underline-offset-4"
                href="https://github.com/ClaraSmyth"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <img className="aspect-auto w-24" src="https://via.placeholder.com/400x600" alt="" />
            <img className="aspect-auto w-64" src="https://via.placeholder.com/600x400" alt="" />
          </div>
        </div>
      ))}
    </>
  );
}

const projectArr = [
  {
    title: 'Project Title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti placeat necessitatibus iusto a commodi exercitationem culpa',
    demoLink: 'https://clarasmyth.github.io/',
    codeLink: 'https://github.com/ClaraSmyth',
    mobileImage: 'https://via.placeholder.com/400x600',
    desktopImage: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Project Title 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti placeat necessitatibus iusto a commodi exercitationem culpa',
    demoLink: 'https://clarasmyth.github.io/',
    codeLink: 'https://github.com/ClaraSmyth',
    mobileImage: 'https://via.placeholder.com/400x600',
    desktopImage: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Project Title 3',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti placeat necessitatibus iusto a commodi exercitationem culpa',
    demoLink: 'https://clarasmyth.github.io/',
    codeLink: 'https://github.com/ClaraSmyth',
    mobileImage: 'https://via.placeholder.com/400x600',
    desktopImage: 'https://via.placeholder.com/600x400',
  },
];

export default Projects;
