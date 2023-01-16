import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSmoothScroll } from '../hooks';

function Projects() {
  const container = useRef(null);
  const spring = useSmoothScroll(container);

  return (
    <motion.div
      ref={container}
      style={{ y: spring }}
      className="grid h-[100dvh] grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2"
    >
      <div className="flex max-w-sm flex-col gap-4">
        <h2 className="text-4xl font-bold">Project Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti placeat necessitatibus iusto a
          commodi exercitationem culpa.
        </p>
        <div className="flex gap-2">
          <a
            className="rounded-lg bg-gray-300 py-2 px-4 font-medium"
            href="https://clarasmyth.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            className="py-2 px-4 font-medium underline underline-offset-4"
            href="https://github.com/ClaraSmyth"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>

      <div className=" flex items-end justify-center gap-4 max-md:row-start-1">
        <img
          className="relative left-8 aspect-auto h-full w-[15%] -rotate-[15deg]"
          src="https://via.placeholder.com/375x667/blue"
          alt=""
        />
        <img className="aspect-auto h-full w-[70%]" src="https://via.placeholder.com/1600x900" alt="" />
      </div>
    </motion.div>
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
