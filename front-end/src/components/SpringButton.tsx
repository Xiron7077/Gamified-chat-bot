'use client'

import { motion } from "framer-motion";

interface ButtonProp {
  children: string;
  address: string;
}

export default function SpringButton({children, address}: ButtonProp) {
  return (
    <div>
      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          duration: 1.5,
          delay: 2.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        >
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a href={address}>
            <button className="h-16 w-40 rounded-3xl bg-gradient-to-r from-pink-500 to-violet-500">
              <span className="text-white font-Poppins text-xl">{children}</span>
            </button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
