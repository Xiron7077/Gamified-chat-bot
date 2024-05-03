import { CheckBox } from "@/components/CheckBox";
import SpringButton from "@/components/SpringButton";

export default function Login(){
    return (
        <div className="w-full h-full fixed bg-[url('/starmancer.gif')] bg-cover">
            <div className="flex flex-col relative place-items-center space-y-16 top-8">
                <div className="flex flex-col space-y-20 text-white font-Poppins">
                    <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        Xiron
                    </h1>
                </div>
                <div className="border-[2px] rounded-2xl p-12 backdrop-blur border-gray-400 shadow-indigo-500/50">
                    <h2 className="text-4xl ml-28 mb-7 text-white font-Poppins font-semibold">
                        Login
                    </h2>
                    <form>
                        <label className="text-white ml-1 text-lg">
                            Email
                        </label>
                        <input type="email" placeholder="you@example.com" className="peer border-[1px] border-gray-400 text-white caret-white bg-inherit rounded-3xl h-10 w-full px-4 invalid:border-pink-600 focus-visible:outline-none disabled:cursor-not-allowed"/>
                        <p className="-mt-3 ml-1 invisible peer-invalid:visible peer-invalid:mt-2 text-pink-600 text-sm">
                            Please provide a valid email address.
                        </p>
                    </form>
                    <form className="mt-3">
                        <label className="text-white ml-1 text-lg">
                            Password
                        </label>
                        <input type="password" className="peer border-[1px] border-gray-400 text-white caret-white bg-inherit rounded-3xl h-10 w-full px-4 focus-visible:outline-none disabled:cursor-not-allowed"/>
                    </form>
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
