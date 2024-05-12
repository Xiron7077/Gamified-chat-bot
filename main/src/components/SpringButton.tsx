'use client'

import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

interface ButtonProp {
  children: string;
  address?: string
  textColor?: string;
  bgColor?: string;
  contentLocation?: string;
  moreContent?: React.ReactNode
}

export default function SpringButton({children, address = "", textColor = "black", bgColor = "white", moreContent, contentLocation}: ButtonProp) {
  const router = useRouter();

  const buttonStyle = {
    backgroundColor: bgColor
  }

  let textStyle = {
    backgroundColor: "",
    backgroundImage: "",
    backgroundClip: "",
    color: ""
  }

  if(!textColor.includes("linear-gradient")){
    textStyle["backgroundColor"] = "none";
    textStyle["color"] = textColor;
  } else {
    textStyle["backgroundImage"] = textColor,
    textStyle["color"] = "transparent",
    textStyle["backgroundClip"] = "text"
  }

  if(contentLocation === "before"){
    return (
      <div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button type="button" onClick={() => router.push(address)} className="h-12 w-full rounded-3xl flex flex-row space-x-3 justify-center" style={buttonStyle}>
                <div className="mt-4">
                  {moreContent}
                </div>
                <span className="font-Poppins text-base font-semibold text-transparent mt-[14px]" style={textStyle}>{children}</span>
              </button>
          </motion.div>
      </div>
    );
  } else if(contentLocation === "after") {
    return (
      <div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button type="button" onClick={() => router.push(address)} className="h-12 w-full rounded-3xl flex flex-row space-x-3 justify-center" style={buttonStyle}>
                <span className="font-Poppins text-base font-semibold text-transparent mt-[14px]" style={textStyle}>{children}</span>
                <div className="mt-4">
                  {moreContent}
                </div>
              </button>
          </motion.div>
      </div>
    );
  } else {
    return (
      <div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button type="button" onClick={() => router.push(address)} className="h-12 w-full rounded-3xl" style={buttonStyle}>
                <span className="font-Poppins text-xl font-semibold text-transparent" style={textStyle}>{children}</span>
              </button>
          </motion.div>
      </div>
    );
  }

}
