import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSmoothScroll, useSmoothScrollRotate } from '../hooks';

function Projects() {
  const container = useRef(null);
  const spring = useSmoothScroll(container);
  const [springX, springRotate] = useSmoothScrollRotate(container);

  return (
    <motion.div
      ref={container}
      className="grid h-[100dvh] grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2"
    >
      <motion.div
        style={{ y: spring }}
        className="flex w-[80%] max-w-md flex-col gap-4 self-start text-center md:self-center md:text-start 2xl:max-w-lg 2xl:text-xl"
      >
        <h2 className="text-3xl font-bold sm:text-4xl 2xl:text-5xl">Project Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti placeat necessitatibus iusto a
          commodi exercitationem culpa.
        </p>
        <div className="flex justify-center gap-2 md:justify-start">
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
      </motion.div>

      <motion.div style={{ y: spring }} className=" flex items-end justify-center gap-4 max-md:row-start-1">
        <motion.div
          style={{ x: springX, rotate: springRotate }}
          className="phone relative left-4 aspect-auto h-full w-[15%]"
        >
          <img src="https://via.placeholder.com/375x667/red" alt="" />
        </motion.div>
        <div className="desktop aspect-auto h-full w-[70%]">
          <div className="desktop-dots">
            <div className="bg-red-500"></div>
            <div className="bg-orange-500"></div>
            <div className="bg-green-500"></div>
          </div>
          <img src="https://via.placeholder.com/1600x900" alt="" />
        </div>
      </motion.div>
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
