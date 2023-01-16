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
      className="grid h-[100dvh] grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2"
    >
      <motion.div
        style={{ y: spring }}
        className="flex max-w-sm flex-col gap-4 p-2 text-center md:text-start 2xl:max-w-lg"
      >
        <p className="text-4xl font-bold 2xl:text-5xl">About Me</p>
        <p className="2xl:text-xl">
          I am a highly motivated self-taught web developer with a passion for creating responsive and user-friendly
          webpages. I am constantly learning and excited to continue honing my skills and growing as a developer.
        </p>
      </motion.div>
      <motion.div
        style={{ y: spring }}
        className="grid w-full max-w-sm grid-cols-[max-content,1fr] justify-items-end gap-4 p-2 2xl:max-w-xl 2xl:gap-8 2xl:text-xl"
      >
        {skills.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <p className="text-lg font-medium 2xl:text-2xl">{item.name}</p>
            {item.icon}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

const skills = [
  { name: 'HTML', icon: <SiHtml5 size={'3em'} /> },
  { name: 'CSS', icon: <SiCss3 size={'3em'} /> },
  { name: 'JavaScript', icon: <SiJavascript size={'3em'} /> },
  { name: 'SASS', icon: <SiSass size={'3em'} /> },
  { name: 'React', icon: <SiReact size={'3em'} /> },
  { name: 'TypeScript', icon: <SiTypescript size={'3em'} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={'3em'} /> },
  { name: 'Jest', icon: <SiJest size={'3em'} /> },
  { name: 'Git', icon: <SiGit size={'3em'} /> },
  { name: 'Webpack', icon: <SiWebpack size={'3em'} /> },
];

export default About;
