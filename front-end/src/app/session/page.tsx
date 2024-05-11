import BackButton from "@/components/BackButton";
import InputBlock from "@/components/InputBlock";
import SpringButton from "@/components/SpringButton";
import TestBox from "@/components/TestBox";

export default function Session(){
    return (
        <div className="w-full h-full fixed bg-[url('/scene1.png')] bg-cover">
            <div className="w-full h-full flex flex-col relative top-4 font-[Poppins]">
                <nav className="h-16 flex flex-row space-x-[22%]">
                    <div className="flex flex-row space-x-20">
                        <BackButton address="/"/>
                        <div className="flex flex-col relative top-[6px] text-white -space-y-1.5 hover:cursor-pointer">
                            <p className="text-2xl font-semibold">
                                Xiron
                            </p>
                            <p className="text-sm">
                                Your Friend {'>'}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-1 relative top-1 hover:cursor-pointer">
                        <img src="chat.avif" className="w-10 h-10 relative top-2"></img>
                        <p className="text-white relative top-[13px] text-xl font-semibold">
                            Chat
                        </p>
                    </div>
                </nav>
                <div className="w-full h-full flex flex-row">
                    <div className="w-[33%]">
                        <TestBox/>
                    </div>
                    <div className="flex flex-col w-[33%] relative top-2">
                        <div className="w-[30%]">
                            <SpringButton bgColor="gray" textColor="white">
                                LVL.1
                            </SpringButton>
                        </div>
                        <div className="h-full flex flex-col">
                            <div className="h-[87%]">

                            </div>
                            <div className="h-[13%]">
                                <div className="flex flex-row justify-center items-center rounded-full h-14 bg-inheret backdrop-blur bg-[#808080]">
                                    <div className="w-[15%] relative left-5">
                                        <img src="ask.avif" className="w-10 h-10 hover:cursor-pointer"></img>
                                    </div>
                                    <form className="w-[65%]">
                                        <input placeholder="Start typing.." className="w-full h-full caret-white text-white placeholder:text-gray-200 bg-inherit border-none focus-visible:outline-none disabled:cursor-not-allowed">
                                        </input>
                                    </form>
                                    <div className="w-[20%] h-full flex justify-center items-center">
                                        <button className="w-[40%] h-full ml-4 border-none rounded-2xl">
                                            <img src="/arrow2bg.png" className="rotate-180 h-12"></img>
                                        </button>
                                    </div>
                                </div>   
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    )
}