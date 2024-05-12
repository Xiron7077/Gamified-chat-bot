'use client'

import { motion } from "framer-motion";

interface ReadMoreProp{
  children: React.ReactNode
}

export default function DelayShow({children}: ReadMoreProp) {
    return (
      <motion.div
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{
          duration: 1.2,
          delay: 4,
          ease: [0, 0.71, 0.2, 1.01],
        }} 
        >
        <span>{children}</span>
      </motion.div>
    );
}
