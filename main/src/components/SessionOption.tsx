'use client'

interface SessionOptionProps{
    image?: string;
    label?: string;
}

export default function SessionOption({image, label}: SessionOptionProps) {
    return(
        <div className="flex flex-row space-x-[1px] hover:cursor-pointer">
            <img src={image} className="w-8 h-8 relative top-2"></img>
            <p className="text-white relative top-[13px] text-base font-semibold">
                {label}
            </p>
        </div>
    )
}