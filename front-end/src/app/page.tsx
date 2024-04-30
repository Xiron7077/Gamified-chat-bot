import Navbar from "@/components/Navbar";
import ParallaxText from "@/components/ParallaxText";
import SpringButton from "@/components/SpringButton";
import TextType from "@/components/TextType";
import Image from "next/image";

export default function Home() {
  return (
    <><Navbar />
      <div className="w-full h-full fixed top-16 z-0 bg-[url('/2.gif')] bg-cover bg-no-repeat">
        <div className="flex flex-col z-1 relative place-items-center top-20 space-y-14">
          <h1 className="font-Poppins font-semibold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Xiron
          </h1>
          <p className="text-center">
            <TextType/>
          </p>
          <div className="mt-4">
            <SpringButton>
              Get Started
            </SpringButton>
          </div>
        </div>
      </div>
    </>
  );
}
