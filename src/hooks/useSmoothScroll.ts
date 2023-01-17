import { useScroll, useSpring, useTransform } from 'framer-motion';
import { MutableRefObject } from 'react';

function useSmoothScroll(container: MutableRefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'center center', 'end start'] });
  const transform = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const spring = useSpring(transform, { damping: 10, mass: 0.2, stiffness: 50 });
  return spring;
}

export default useSmoothScroll;
