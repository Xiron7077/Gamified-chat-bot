import SpringButton from "@/components/SpringButton";
import BackButton from "@/components/BackButton";
import InputBlock from "@/components/InputBlock";

export default function SignUp(){
    return (
        <div className="w-full h-full fixed bg-[url('/test.gif')] bg-cover">
            <div className="flex flex-col relative place-items-center space-y-12 top-8">
                <div className="flex flex-row">
                    <BackButton address="/"/>
                </div>
                <div className="border-[2px] rounded-2xl p-12 backdrop-blur border-gray-400 shadow-indigo-500/50">
                    <h2 className="text-4xl ml-32 mb-7 text-white font-Poppins font-semibold">
                        Sign Up
                    </h2>
                    <InputBlock label="Email" type="email" placeholder="you@example.com"/>
                    <div className="mt-3">
                        <InputBlock label="Password" type="password and confirm password"/>
                    </div>   
                    <p className="text-gray-300 relative text-center text-sm mt-4">
                        By signing up or logging in, you agree to our <br/> <a className="hover:underline hover:text-white cursor-pointer"> Terms of use </a> and <a className="hover:underline hover:text-white cursor-pointer"> Privacy Policy. </a>
                    </p>
                    <div className="mt-3">
                        <SpringButton address="/signup/personal-info" textColor="linear-gradient(to right, rgb(236, 72, 153), rgb(139, 92, 246))" bgColor="white">
                            Continue
                        </SpringButton>
                    </div>
                    <div className="flex flex-row mt-3 space-x-1 justify-center ">
                        <p className="text-gray-300">
                            Already have an account?
                        </p>
                        <a href="/login" className="text-white hover:underline">
                            Login
                        </a>
                    </div>
                    <div className="ml-2 mt-6 flex flex-row space-x-1">
                        <div className="h-[1px] w-48 bg-white"/>
                        <div className="-mt-4 text-transparent bg-white bg-clip-text">.</div>
                        <div className="h-[1px] w-48 bg-white"/>
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
