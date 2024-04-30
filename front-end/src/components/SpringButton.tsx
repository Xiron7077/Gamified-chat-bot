'use client'

import { motion } from "framer-motion";

interface ButtonProp {
  children: string;
}

export default function SpringButton({children}: ButtonProp) {
  return (
    <div className="">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <button className="h-16 w-40 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 ">
          <span className="text-white font-Poppins text-xl">{children}</span>
        </button>
      </motion.div>
    </div>
  );
}
