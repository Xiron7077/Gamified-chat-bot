import BackButton from "@/components/BackButton";
import SessionOption from "@/components/SessionOption";
import SpringButton from "@/components/SpringButton";
import TestBox from "@/components/TestBox";
import TextBox from "@/components/TextBox";

export default function Session(){
    return (
        <div className="w-full h-full fixed bg-[url('/scene1.png')] bg-cover">
            <div className="w-full h-full flex flex-col relative top-4 font-[Poppins]">
                <nav className="w-full h-16 flex flex-row space-x-72">
                    <div className="w-[20%] flex flex-row space-x-20">
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
                    <div className="w-[40%] flex flex-row relative top-1 space-x-4">
                        <SessionOption image="chat.avif" label="Chat"/>
                        <SessionOption image="store.avif" label="Store"/>
                        <SessionOption image="memory.avif" label="Memory"/>
                        <SessionOption image="diary.avif" label="Diary"/>
                        <SessionOption image="quests.avif" label="Quests"/>
                    </div>
                    <div className="w-[20%] relative right-5 flex flex-row space-x-4 justify-center items-center">
                        <div className="w-[50%] rounded-3xl bg-[#808080] flex flex-row justify-center items-center -space-x-2 pl-1 h-12">
                            <div className="w-[50%] flex flex-row space-x-1 text-white">
                                <img src="gem.png" className="w-6"></img>
                                <label className="relative top-[4px] text-sm font-semibold">15</label>
                            </div>
                            <div className="w-[50%] flex flex-row space-x-[2px] text-white">
                                <img src="coin.png" className="w-6"></img>
                                <label className="relative top-[4px] text-sm font-semibold">705</label>
                            </div>
                        </div>
                        <button className="w-[25%] h-12 rounded-3xl bg-[#808080] flex justify-center items-center">
                            <img src="line.png" className="w-10"></img>
                        </button>
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
                                <TextBox/>  
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    )
}