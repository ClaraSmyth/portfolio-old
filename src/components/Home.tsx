import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks';
import { MdOutlineMailOutline } from 'react-icons/md';
import { useWindowSize } from 'usehooks-ts';

function Home() {
  const container = useRef<HTMLDivElement | null>(null);
  const spring = useSmoothScroll(container);
  const windowSize = useWindowSize();

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Need to set canvas width and height here to avoid distortions
    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    // Font Styling
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';

    const maxLineHeight = windowSize.width * 0.15;
    const lineHeight = maxLineHeight < 96 ? 96 : maxLineHeight;

    const textArr = ['Clara', 'Smyth', 'Web Developer'];
    const textX = canvas.width / 2;
    const textY = canvas.height / 2 - lineHeight / 2;

    textArr.forEach((word, index) => {
      if (word === 'Web Developer') {
        ctx.font = 'max(2rem,3vw) Lusitana';
        ctx.fillText(word, textX, textY + index * lineHeight * 0.85);
        return;
      }
      ctx.font = 'bold max(6rem,15vw) Raleway';
      ctx.fillText(word, textX, textY + index * lineHeight);
    });
  }, [windowSize]);

  return (
    <div ref={container} className="flex h-[100dvh] flex-col">
      <header className="fixed z-50 flex w-full justify-end p-2">
        <a className="fold relative" href="mailto:clarasmyth.work@gmail.com">
          <MdOutlineMailOutline size={'2em'} />
        </a>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center text-center leading-none">
        <motion.div style={{ y: spring }}>
          <canvas className="canvas bg-slate-400"></canvas>
          {/* <h2 className="text-[max(6rem,15vw)] leading-none">Clara</h2>
          <h2 className="mb-24 text-[max(6rem,15vw)] leading-none">Smyth</h2>
          <p className="text-[max(2rem,3vw)] leading-none">Web Developer</p> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
