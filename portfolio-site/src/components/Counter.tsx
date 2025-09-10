import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% in view

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * target));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure final count is exact
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Cleanup if component unmounts during animation
      start = null;
    };
  }, [target, duration, isInView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0 }} transition={{ duration: 0.5 }}>
      {prefix}{count.toLocaleString()}{suffix}
    </motion.div>
  );
};

export default Counter; 