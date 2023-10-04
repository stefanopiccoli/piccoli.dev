"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export default function ({
  display,
  setDisplay,
}: {
  display: string;
  setDisplay: Dispatch<SetStateAction<string>>;
}) {
  const view = () => {
    switch (display) {
      case "home":
        return (
          <>
            <div className="flex justify-between items-center w-full h-full">
              <Image
                src="/images/reception-bar.png"
                className="h-4/5 w-auto rounded-3xl"
                alt="nokia 3310 bg"
                width={1000}
                height={1000}
              />
              <Image
                src="/images/PFPixeled.png"
                className="h-4/5 w-auto rounded-3xl"
                alt="nokia 3310 bg"
                width={1000}
                height={1000}
              />
              <Image
                src="/images/battery-bar.png"
                className="h-4/5 w-auto rounded-3xl"
                alt="nokia 3310 bg"
                width={1000}
                height={1000}
              />
            </div>
            <div className="w-full text-center relative bottom-2">Menu</div>
          </>
        );
      case "menu":
        return <div className="flex justify-between items-center w-full h-full" ></div>; 
      default:
        return <></>;
    }
  };
  return <>{view()}</>;
}
