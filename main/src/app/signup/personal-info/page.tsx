import SpringButton from "@/components/SpringButton";
import BackButton from "@/components/BackButton";
import InputBlock from "@/components/InputBlock";
import { SelectBox } from "@/components/SelectBox";
import { DatePicker } from "@/components/DatePicker";

export default function PersonalInfo(){
    return (
        <div className="w-full h-full fixed bg-[url('/starmancer.gif')] bg-cover">
            <div className="text-white font-Poppins flex flex-col relative place-items-center space-y-20 top-8">
                <BackButton address="/signup"/>
                <div className="border-[2px] rounded-2xl p-12 backdrop-blur border-gray-400 shadow-indigo-500/50">
                    <h2 className="text-4xl relative text-center mb-7 font-Poppins font-semibold">
                        Personal
                    </h2>   
                    <div className="flex flex-col space-y-4">
                        <InputBlock label="Name" type="text"/>
                        <div>
                            <SelectBox label="Pronoun"/>
                        </div> 
                        <DatePicker/>
                    </div>
                    <div className="mt-7">
                        <SpringButton address="/signup/xiron" textColor="linear-gradient(to right, rgb(236, 72, 153), rgb(139, 92, 246))" bgColor="white">
                            Continue
                        </SpringButton>
                    </div>
                    <div className="mt-6 flex flex-row space-x-1">
                        <div className="h-[1px] w-40 bg-white"/>
                        <div className="-mt-4 text-transparent bg-white bg-clip-text">.</div>
                        <div className="h-[1px] w-40 bg-white"/>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-3 text-gray-400 w-full text-sm flex justify-center">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </div>
        </div>
    )
}
