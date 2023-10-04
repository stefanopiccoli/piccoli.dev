"use client";
import Image from "next/image";
import Display from "./Display";
import { useState } from "react";

export default function Mockup() {
  const [display, setDisplay] = useState("menu");
  const handleMiddleButton = () => {
    if (display==='home')
      setDisplay("")
    else
      setDisplay("home")
  }
  return (
    <div className="relative h-screen">
      <Image
        src="/images/nokia3310background.png"
        className="absolute top-[12.3rem] left-10 w-60 h-44"
        alt="nokia 3310 bg"
        width={1000}
        height={1000}
      />
      <div className="absolute font-Nokia p-4 top-[12.3rem] left-10 w-60 h-44 text-Nokia font-light">
        <Display display={display} setDisplay={setDisplay} />
      </div>
      <Image
        src="/images/nokia3310mockup.png"
        className="absolute"
        alt="nokia 3310"
        width={1000}
        height={1000}
      />
      <div className="absolute w-[8.1rem] h-9 bg-white/75 top-[25.5rem] left-[5.9rem] rounded-b-full opacity-0" onClick={handleMiddleButton}></div>
    </div>
  );
}
