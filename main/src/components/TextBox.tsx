'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { useStringContext } from "@/utils/Context";

export default function TextBox() {

    const [text, setText] = useState('');
    const { sharedString, setSharedString, sharedStringLength ,setSharedStringLength } = useStringContext();

    function handleTextChange (e: React.ChangeEvent<HTMLInputElement>) {
        const newText = e.target.value;
        setText(newText);
    }

    function handleEnter (e: any) {
        if(e.key === 'Enter'){
            setSharedString(text);
            setText('');
        }
    }

    function handleClick() {
        setSharedString(text);
        setSharedStringLength(text.length);
        setText('');
    }

    const isText = !!text;

    return (
        <div className="flex flex-row justify-center items-center rounded-full h-14 bg-[#808080]">
            <div className="w-[15%] relative left-5">
                <img src="ask.avif" className="w-10 h-10 hover:cursor-pointer"></img>
            </div>
            <form className="w-[65%]">
                <input 
                    value={text}
                    onChange={handleTextChange}
                    onKeyDown={handleEnter}
                    placeholder="Start typing.." 
                    className="w-full h-full caret-white text-white placeholder:text-gray-200 bg-inherit border-none focus-visible:outline-none disabled:cursor-not-allowed">
                </input>
            </form>
            <div className="w-[20%] h-full flex justify-center items-center">
                <button className="w-[40%]" onClick={handleClick}>
                    <motion.div 
                        whileHover={{scaleY: 1.3}}
                        whileTap={{scaleY: 0.7}}
                    >
                        <div className={`w-full h-full ml-4 border-none rounded-2xl ${isText ? 'visible' : 'invisible'}`}>
                            <img src="/arrow2bg.png" className="rotate-180 h-12"></img>
                        </div>
                    </motion.div>  
                </button>
            </div>
        </div> 
    )
}