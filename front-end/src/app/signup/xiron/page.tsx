import TestBox from "@/components/TestBox";
import BackButton from "@/components/BackButton";
import InputBlock from "@/components/InputBlock";
import { SelectBox } from "@/components/SelectBox";
import { DatePicker } from "@/components/DatePicker";
import SpringButton from "@/components/SpringButton";

export default function forgot_password() {
    return (
        <div className="z-0 w-full h-full fixed bg-[url('/sky.jpg')] bg-cover">
            <div className="z-1 relative top-4">
                <BackButton address="/signup/personal-info"/>
            </div>   
            <div className="z-2 w-full h-full">
                <div className="flex flex-row max-w-screen h-full">
                    <div className="w-[50%]">
                        <TestBox/>
                    </div>
                    <div className="w-[50%] flex justify-center items-center">
                        <div className="flex flex-col relative place-items-center space-y-10 text-white font-Poppins">
                            <label className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                Xiron
                            </label>
                            <div className="flex flex-col space-y-4">
                                <InputBlock label="Name"/>
                                <SelectBox label="Gender"/>
                                <DatePicker/>
                                <div>
                                    <SpringButton address="/session" textColor="linear-gradient(to right, rgb(236, 72, 153), rgb(139, 92, 246))" bgColor="white">
                                        Continue
                                    </SpringButton>  
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}