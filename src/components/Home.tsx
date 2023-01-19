import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll, useCanvasEffect } from '../hooks';
import { MdOutlineMailOutline } from 'react-icons/md';

function Home() {
  const container = useRef<HTMLDivElement | null>(null);
  const spring = useSmoothScroll(container);
  useCanvasEffect();

  return (
    <div ref={container} className="flex h-[100svh] flex-col">
      <header className="fixed z-50 flex w-full justify-end p-2">
        <a className="fold relative text-base" href="mailto:clarasmyth.work@gmail.com">
          <MdOutlineMailOutline size={'2em'} />
        </a>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center text-center leading-none">
        <motion.div style={{ y: spring }}>
          <canvas className="canvas bg-white"></canvas>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
