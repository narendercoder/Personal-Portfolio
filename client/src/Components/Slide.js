import { motion, useInView, useAnimation } from "framer-motion";
import { fadeIn } from "../varients";
import { useRef, useEffect} from "react";

export default function Slide({ children, delay, duration, className }) {
  const ref = useRef(null);
  const isInview = useInView(ref, {
    margin: "-100px",
    once: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview, controls]);


  return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", delay, duration)}
      initial="hidden"
      whileInView={"show"}
      animate={controls}
      viewport={{
        once: true,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
