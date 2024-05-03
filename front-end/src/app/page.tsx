import Navbar from "@/components/Navbar";
import DelayShow from "@/components/DelayShow";
import DelayedSpringButton from "@/components/DelayedSpringButton";
import TextType from "@/components/TextType";

export default function Home() {
  return (
    <><Navbar />
      <div className="w-full h-full fixed top-16 bg-[url('/2.gif')] bg-cover bg-no-repeat">
        <div className="flex flex-col relative place-items-center space-y-14 top-20">
          <h1 className="font-Poppins font-semibold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Xiron
          </h1>
          <div> 
            <h2 className="text-center">
              <TextType/>
            </h2>
          </div>
          <div className="mt-4">
            <DelayedSpringButton address="/signup">
              Get Started
            </DelayedSpringButton>
          </div>
        </div>
        <div className="text-center mt-56 ml-10">
          <DelayShow> 
            <div>
              <p className="text-white font-Poppins inline-block text-lg -mr-5">
                Read More
              </p>
              <img src="/arrow10bg.gif" className="w-24 h-16 mb-2 inline-block -rotate-90"></img>
            </div>
          </DelayShow>
        </div>
      </div>
    </>
  );
}
