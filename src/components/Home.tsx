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

    class Effect {
      context: CanvasRenderingContext2D;
      canvasWidth: number;
      canvasHeight: number;
      maxLineHeight: number;
      lineHeight: number;
      textX: number;
      textY: number;

      constructor(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
        this.context = context;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.maxLineHeight = this.canvasWidth * 0.15;
        this.lineHeight = this.maxLineHeight < 96 ? 96 : this.maxLineHeight;
        this.textX = this.canvasWidth / 2;
        this.textY = this.canvasHeight / 2 - this.lineHeight / 2;
      }

      createText(textArr: string[]) {
        this.context.fillStyle = 'black';
        this.context.textAlign = 'center';

        textArr.forEach((word, index) => {
          if (index === 2) {
            this.context.font = 'max(2rem,3vw) Lusitana';
            this.context.fillText(word, this.textX, this.textY + index * this.lineHeight * 0.85);
            return;
          }
          this.context.font = 'bold max(6rem,15vw) Raleway';
          this.context.fillText(word, this.textX, this.textY + index * this.lineHeight);
        });
      }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.createText(['Clara', 'Smyth', 'Web Developer']);
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
