import Navbar from "@/components/Navbar";
import ParallaxText from "@/components/ParallaxText";
import Image from "next/image";

export default function Home() {
  return (
    <><Navbar />
      <div className="w-full h-full fixed top-16 z-0 bg-[url('/scene.jpg')]">
        <div className="flex flex-col z-1 relative place-items-center top-20 space-y-10">
          <h1 className="font-Poppins font-semibold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Xiron
          </h1>
          <p className="font-Poppins text-5xl text-white font-semibold text-center">
            Your very own<br />
            personal AI companion
          </p>
        </div>
      </div>
    </>
  );
}
