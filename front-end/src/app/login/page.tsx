import CheckBox from "@/components/CheckBox";
import SpringButton from "@/components/SpringButton";
import BackButton from "@/components/BackButton";
import InputBlock from "@/components/InputBlock";

export default function Login(){
    return (
        <div className="w-full h-full fixed bg-[url('/starmancer.gif')] bg-cover">
            <div className="flex flex-col relative place-items-center space-y-20 top-8">
                <div className="flex flex-row">
                    <BackButton address="/"/>
                    <h1 className="text-6xl font-Poppins bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        Xiron
                    </h1>
                </div>
                <div className="border-[2px] rounded-2xl p-12 backdrop-blur border-gray-400 shadow-indigo-500/50">
                    <h2 className="text-4xl ml-28 mb-7 text-white font-Poppins font-semibold">
                        Login
                    </h2>   
                    <InputBlock label="Email" type="email" placeholder="you@example.com"/>
                    <div className="mt-3">
                        <InputBlock label="Password" type="password"/>
                    </div> 
                    <div className="mt-3 flex flex-row space-x-24 text-gray-300">
                        <div>
                            <CheckBox>
                                Remember Me
                            </CheckBox>
                        </div>  
                        <a href="/login/forgot-password" className="hover:underline text-sm mt-[2px]">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="mt-7">
                        <SpringButton address="/session" textColor="linear-gradient(to right, rgb(236, 72, 153), rgb(139, 92, 246))" bgColor="white">
                            Login
                        </SpringButton>
                    </div>
                    <div className="flex flex-row mt-3 space-x-1 justify-center ">
                        <p className="text-gray-300">
                            New to Xiron?
                        </p>
                        <a href="/signup" className="text-white hover:underline">
                            Create an account
                        </a>
                    </div>
                    <div className="mt-6 flex flex-row space-x-1">
                        <div className="h-[1px] w-40 bg-white"/>
                        <div className="-mt-4 text-transparent bg-white bg-clip-text">.</div>
                        <div className="h-[1px] w-40 bg-white"/>
                    </div>
                    <div className="mt-6">
                        <SpringButton textColor="rgb(75, 85, 99)" bgColor="white" contentLocation="before" moreContent={<img src="/google.png" className="w-5 h-5"></img>}>
                            Continue with Google
                        </SpringButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
