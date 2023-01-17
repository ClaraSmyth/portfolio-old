import { useScroll, useSpring, useTransform } from 'framer-motion';
import { MutableRefObject } from 'react';

function useSmoothScrollRotate(container: MutableRefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'center center', 'end start'] });
  const transform = useTransform(scrollYProgress, [0, 0.5, 1], [64, 0, 64]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, -15, 0]);
  const springX = useSpring(transform, { damping: 10, mass: 0.2, stiffness: 50 });
  const springRotate = useSpring(rotate, { damping: 10, mass: 0.2, stiffness: 50 });
  return [springX, springRotate];
}

export default useSmoothScrollRotate;
