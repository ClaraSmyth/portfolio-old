import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { useProjectsArr, useSmoothScroll, useSmoothScrollRotate } from '../hooks';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

function Projects() {
  const container = useRef(null);
  const spring = useSmoothScroll(container);
  const [springX, springRotate] = useSmoothScrollRotate(container);
  const { currentProject, pageNext, pagePrev } = useProjectsArr();
  return (
    <motion.div
      ref={container}
      id={'projects'}
      className="grid h-[100svh] grid-cols-1 grid-rows-[2fr,min-content,1fr] items-center justify-items-center gap-4 md:grid-cols-2 md:grid-rows-[2fr,1fr]"
    >
      <motion.div
        style={{ y: spring }}
        className="flex w-[90%] max-w-md flex-col justify-between gap-4 self-start p-4 text-center md:self-end md:text-start md:text-lg 2xl:min-h-[17.5rem] 2xl:max-w-lg 2xl:text-xl"
      >
        <motion.h3
          key={currentProject.title}
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="text-3xl font-bold sm:text-4xl 2xl:text-5xl"
        >
          {currentProject.title}
        </motion.h3>
        <div className="flex justify-center gap-2 text-2xl md:justify-start">
          {currentProject.icons.map((icon) => {
            return icon;
          })}
        </div>
        <p>{currentProject.desc}</p>
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            className="rounded-lg bg-white/30  py-2 px-4 font-semibold transition duration-300 hover:bg-white/50"
            href={currentProject.demoLink}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            className="py-2 px-4 font-semibold underline underline-offset-4 transition duration-300"
            href={currentProject.codeLink}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </motion.div>

      <motion.div
        style={{ y: spring }}
        className=" flex w-full items-end justify-center gap-4 self-end max-md:row-start-1"
      >
        <motion.div
          style={{ x: springX, rotate: springRotate }}
          className="phone relative left-4 -ml-4 aspect-auto h-full w-[15%]"
        >
          <div className="aspect-[360/740] w-full bg-white">
            <AnimatePresence>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute rounded-b-md"
                key={currentProject.mobileImage}
                src={currentProject.mobileImage}
                alt=""
              />
            </AnimatePresence>
          </div>
        </motion.div>
        <div className="desktop aspect-auto h-full min-w-[75%]">
          <div className="desktop-dots">
            <div className="bg-red-500"></div>
            <div className="bg-orange-500"></div>
            <div className="bg-green-500"></div>
          </div>
          <div className="aspect-[16/9] w-full">
            <AnimatePresence>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute rounded-b-md"
                key={currentProject.desktopImage}
                src={currentProject.desktopImage}
                alt=""
              />
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <motion.div style={{ y: spring }} className="flex w-full justify-around self-start md:col-span-2 md:pt-8">
        <button onClick={pagePrev} className="rounded-full bg-white/30 p-2 transition duration-300 hover:bg-white/50 ">
          <MdOutlineArrowBackIos size={'2em'} className="relative right-0.5" />
        </button>
        <button onClick={pageNext} className="rounded-full bg-white/30  p-2 transition duration-300 hover:bg-white/50 ">
          <MdOutlineArrowForwardIos size={'2em'} className="relative left-0.5" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
