import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks';

function Home() {
  const container = useRef(null);
  const spring = useSmoothScroll(container);

  return (
    <div ref={container} className="flex h-[100dvh] flex-col">
      <header className="fixed flex w-full justify-between px-2 py-2">
        <p>Home</p>
        <p>Contact</p>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center leading-none">
        <motion.div style={{ y: spring }}>
          <p className="text-[3vw]">Hi.</p>
          <p className="-ml-[5%] text-[6vw]">Im Clara.</p>
          <p className="text-[12vw]">Web Developer.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
