import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiGithub,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSmoothScroll } from '../hooks';

function About() {
  const container = useRef(null);
  const spring = useSmoothScroll(container);

  return (
    <motion.div
      ref={container}
      className="grid h-[100svh] grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2"
    >
      <motion.div style={{ y: spring }} className="flex w-[90%] max-w-lg flex-col gap-4 p-4 text-center md:text-start">
        <h3 className="text-3xl font-bold sm:text-4xl 2xl:text-5xl">About Me</h3>
        <p className="2xl:text-xl">
          I am a highly motivated self-taught web developer with a passion for creating responsive and user-friendly
          webpages. I am constantly learning and excited to continue honing my skills and growing as a developer.
        </p>
        <a
          href="https://github.com/ClaraSmyth"
          target="_blank"
          rel="noreferrer"
          className="flex max-w-max items-center justify-center gap-1 text-lg font-semibold md:col-span-2 md:justify-start"
        >
          <SiGithub size={'1.5em'} />
          Clara Smyth
        </a>
      </motion.div>
      <motion.div
        style={{ y: spring }}
        className="grid w-full max-w-sm grid-cols-[max-content,1fr] justify-items-end gap-4 p-2 text-sm sm:text-base 2xl:max-w-xl 2xl:gap-8 2xl:text-xl"
      >
        {skills.map((item) => (
          <div key={item.name} className="group flex items-center gap-2">
            <p className="text-base font-semibold sm:text-lg 2xl:text-2xl">{item.name}</p>
            {item.icon}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

const skills = [
  {
    name: 'HTML',
    icon: <SiHtml5 size={'3em'} className="origin-bottom transition duration-300 group-hover:text-[#E34F26]" />,
  },
  {
    name: 'CSS',
    icon: <SiCss3 size={'3em'} className="origin-bottom transition duration-300 group-hover:text-[#1572B6]" />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={'3em'} className="origin-bottom transition duration-300 group-hover:text-[#F7DF1E]" />,
  },
  {
    name: 'SASS',
    icon: <SiSass size={'3em'} className="origin-bottom transition duration-300 group-hover:text-[#CC6699]" />,
  },
  {
    name: 'React',
    icon: <SiReact size={'3em'} className="origin-bottom transition duration-300 group-hover:text-[#61DAFB]" />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={'3em'} className="origin-bottom transition duration-300 group-hover:text-[#3178C6]" />,
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss size={'3em'} className="origin-bottom transition duration-300 group-hover:text-[#06B6D4]" />,
  },
  {
    name: 'Jest',
    icon: <SiJest size={'3em'} className="origin-bottom transition duration-300 group-hover:text-[#C21325]" />,
  },
  {
    name: 'Git',
    icon: <SiGit size={'3em'} className="origin-bottom transition duration-300 group-hover:text-[#F05032]" />,
  },
  {
    name: 'Webpack',
    icon: <SiWebpack size={'3em'} className="origin-bottom transition duration-300 group-hover:text-[#8DD6F9]" />,
  },
];

export default About;
