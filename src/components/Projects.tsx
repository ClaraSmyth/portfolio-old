function Projects() {
  return (
    <div className="grid h-[100dvh] grid-cols-2 items-center justify-items-center gap-4">
      <div className="flex max-w-sm flex-col">
        <h2 className="text-4xl font-bold">Project Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti placeat necessitatibus iusto a
          commodi exercitationem culpa, eos minima consectetur nobis, praesentium quam veniam. Quis tempora perspiciatis
          maxime quas eos.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <img className="aspect-auto w-24" src="https://via.placeholder.com/400x600" alt="" />
        <img className="aspect-auto w-64" src="https://via.placeholder.com/600x400" alt="" />
      </div>
    </div>
  );
}

export default Projects;
