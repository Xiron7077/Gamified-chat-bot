'use client'

interface BackButtonProp{
  address: string;
}

export default function BackButton({address}: BackButtonProp) {
  return (
    <a href={address} className="absolute left-6 mt-2">
      <button className="pr-[2px] border border-gray-400 rounded-full hover:bg-white hover:border-white">
        <img src="/arrow2bg.png" className="rotate-90 h-[42px] w-10"></img>
      </button>
    </a> 
  );
}

   