'use client'

import { useStringContext } from "@/utils/Context"

export default function Chat() {
    const {sharedString, sharedStringLength} = useStringContext();

    let isOverflowX = false;

    if(sharedStringLength > 17){
        isOverflowX =  true;
    }

    const isText = !!sharedString;

    return (
        <div className="text-white bg-[#808080] rounded-3xl rounded-br-[8px] min-h-10 h-auto w-fit max-w-[45%] flex justify-start items-center">
            <div className={`${isText ? 'ml-3 mr-3' : ''} ${isOverflowX ? 'ml-4 my-2' : ''}`}>
                {sharedString}
            </div>
        </div>
    )
}