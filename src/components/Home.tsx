import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks';
import { MdOutlineMailOutline } from 'react-icons/md';
import { useWindowSize } from 'usehooks-ts';

function Home() {
  const container = useRef<HTMLDivElement | null>(null);
  const spring = useSmoothScroll(container);
  const windowSize = useWindowSize();
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Need to set canvas width and height here to avoid distortions
    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    class Particle {
      effect: any;
      x: number;
      y: number;
      colour: string;
      originX: number;
      originY: number;
      size: number;
      dx: number;
      dy: number;
      vx: number;
      vy: number;
      force: number;
      angle: number;
      distance: number;
      friction: number;
      ease: number;

      constructor(effect: any, x: number, y: number, colour: string) {
        this.effect = effect;
        this.x = Math.random() * this.effect.canvasWidth;
        this.y = y;
        this.colour = colour;
        this.originX = x;
        this.originY = y;
        this.size = this.effect.gap;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
        this.friction = Math.random() * 0.6 + 0.15;
        this.ease = Math.random() * 0.1 + 0.005;
      }

      draw() {
        this.effect.context.fillStyle = this.colour;
        this.effect.context.fillRect(this.x, this.y, this.size, this.size);
      }

      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
      }
    }

    class Effect {
      context: CanvasRenderingContext2D;
      canvasWidth: number;
      canvasHeight: number;
      maxLineHeight: number;
      lineHeight: number;
      textX: number;
      textY: number;
      particles: any;
      gap: number;
      mouse: {
        radius: number;
        x: number;
        y: number;
      };

      constructor(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
        // Canvas values
        this.context = context;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.maxLineHeight = this.canvasWidth * 0.15;
        this.lineHeight = this.maxLineHeight < 96 ? 96 : this.maxLineHeight;
        this.textX = this.canvasWidth / 2;
        this.textY = this.canvasHeight / 2 - this.lineHeight / 2;
        // Particle Values
        this.particles = [];
        this.gap = 3;
        this.mouse = {
          radius: 1000,
          x: 0,
          y: 0,
        };
        window.addEventListener('mousemove', (e) => {
          this.mouse.x = e.x;
          this.mouse.y = e.y;
        });
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

      convertToParticles() {
        this.particles.length = 0;
        const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        for (let y = 0; y < this.canvasHeight; y += this.gap) {
          for (let x = 0; x < this.canvasWidth; x += this.gap) {
            const index = (y * this.canvasWidth + x) * 4;
            const alpha = pixels[index + 3];
            if (alpha > 0) {
              const red = pixels[index];
              const green = pixels[index + 1];
              const blue = pixels[index + 2];
              const colour = 'rgb(' + red + ',' + green + ',' + blue + ')';
              this.particles.push(new Particle(this, x, y, colour));
            }
          }
        }
      }

      render() {
        this.particles.forEach((particle: any) => {
          particle.update();
          particle.draw();
        });
      }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.createText(['Clara', 'Smyth', 'Web Developer']);

    if (!firstLoad) {
      effect.convertToParticles();
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.render();
        requestAnimationFrame(animate);
      };
      animate();
    }
    setFirstLoad(false);
  }, [windowSize, firstLoad]);

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
