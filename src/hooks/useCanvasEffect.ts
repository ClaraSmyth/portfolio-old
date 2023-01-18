import { useState, useEffect } from 'react';

function useCanvasEffect() {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      willReadFrequently: true,
    });
    if (!ctx) return;

    // Need to set canvas width and height here to avoid distortions
    canvas.width = window.innerWidth > 1600 ? 1600 : window.innerWidth;
    canvas.height = window.innerHeight > 900 ? 900 : window.innerHeight;

    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.createText(['Clara', 'Smyth', 'Web Developer']);

    if (!firstLoad) {
      effect.convertToParticles();

      const isInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return rect.bottom >= 0;
      };

      const animate = () => {
        if (isInViewport(canvas)) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          effect.render();
        }
        requestAnimationFrame(animate);
      };

      animate();

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth > 1600 ? 1600 : window.innerWidth;
        canvas.height = window.innerHeight > 900 ? 900 : window.innerHeight;
        effect.resize(canvas.width, canvas.height);
        effect.createText(['Clara', 'Smyth', 'Web Developer']);
        effect.convertToParticles();
      });
    }
    setFirstLoad(false);
  }, [firstLoad]);
}

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
    this.ease = Math.random() * 0.1 + 0.02;
  }

  draw() {
    // this.effect.context.fillStyle = this.colour;
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
    this.gap = 2;
    this.mouse = {
      radius: 1000,
      x: 0,
      y: 0,
    };
    document.querySelector('canvas')?.addEventListener('mousemove', (e: any) => {
      const pageOffset = e.currentTarget.getBoundingClientRect();
      this.mouse.x = e.x - pageOffset.left;
      this.mouse.y = e.y - pageOffset.top;
    });
  }

  createText(textArr: string[]) {
    this.context.fillStyle = 'black';
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 2;
    this.context.textAlign = 'center';

    textArr.forEach((word, index) => {
      if (index === 2) {
        this.context.font = 'clamp(2rem, 0.6667rem + 3.3333vw, 4rem) Lusitana';
        this.context.fillText(word, this.textX, this.textY + index * this.lineHeight * 0.85);
        return;
      }
      this.context.font = 'bold clamp(6rem, 0rem + 15vw, 15rem) Raleway';
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

  resize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.maxLineHeight = this.canvasWidth * 0.15;
    this.lineHeight = this.maxLineHeight < 96 ? 96 : this.maxLineHeight;
    this.textX = this.canvasWidth / 2;
    this.textY = this.canvasHeight / 2 - this.lineHeight / 2;
  }
}

export default useCanvasEffect;
