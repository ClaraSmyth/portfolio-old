import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll, useCanvasEffect } from '../hooks';
import { MdOutlineMailOutline } from 'react-icons/md';

function Home() {
  const container = useRef<HTMLDivElement | null>(null);
  const spring = useSmoothScroll(container);
  useCanvasEffect();

  return (
    <div ref={container} className="flex h-[100dvh] flex-col">
      <header className="fixed z-50 flex w-full justify-end p-2">
        <a className="fold relative" href="mailto:clarasmyth.work@gmail.com">
          <MdOutlineMailOutline size={'2em'} />
        </a>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center text-center leading-none">
        <motion.div style={{ y: spring }}>
          <canvas className="canvas bg-white"></canvas>
          {/* <h2 className="text-[max(6rem,15vw)] leading-none">Clara</h2>
          <h2 className="mb-24 text-[max(6rem,15vw)] leading-none">Smyth</h2>
          <p className="text-[max(2rem,3vw)] leading-none">Web Developer</p> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
