import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end center'] });
  const transform = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const spring = useSpring(transform, { damping: 12, mass: 0.2, stiffness: 50 });

  return (
    <motion.div ref={container} className="flex h-[100dvh] flex-col">
      <header className="fixed flex w-[100dvw] justify-between px-2 py-2">
        <p>Home</p>
        <p>Contact</p>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center leading-none">
        <motion.div style={{ y: spring, opacity }}>
          <p className="text-[3vw]">Hi.</p>
          <p className="-ml-[5%] text-[6vw]">Im Clara.</p>
          <p className="text-[12vw]">Web Developer.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
