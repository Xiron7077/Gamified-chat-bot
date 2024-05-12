'use client'

import { motion } from "framer-motion";

interface SpringEffectProp{
    children: React.ReactNode;
}

export default function SpringEffect({children}: SpringEffectProp) {
    return(
        <motion.div 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
        >
            {children}
        </motion.div>
    )
}