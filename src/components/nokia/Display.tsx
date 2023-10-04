"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import MenuItem from "./MenuItem";

export default function ({
  display,
  setDisplay,
  menuItems,
  menuItem,
}: {
  display: string;
  setDisplay: Dispatch<SetStateAction<string>>;
  menuItems: any[];
  menuItem: number;
}) {
  const timestamp = new Date();

  const view = () => {
    switch (display) {
      case "home":
        return (
          <>
            <div className="w-full absolute text-right px-4 top-2">{`${timestamp.getHours()}:${timestamp.getMinutes()}`}</div>
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
        return (
          <div className="flex flex-col justify-between items-center w-full h-full">
            <MenuItem
              src={menuItems[menuItem].src}
              title={menuItems[menuItem].title}
              action={menuItems[menuItem].action}
            />
            <div className="w-full text-center relative">Select</div>
          </div>
        );
      case "contacts":
        return (
          <>
            <div className="border-2 border-Nokia">Stefano Piccoli</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse qui eaque rerum quis unde numquam voluptas distinctio molestiae vitae saepe?</p>
          </>
        );
        case "gallery":
        return (
          <>
            <div className="grid grid-cols-3">
              {menuItems.map((item,i)=>(
                <Image key={i} src={item.src} alt="" width={300} height={300}/>
              ))}
            </div>
          </>
        );
      default:
        return <></>;
    }
  };
  return <>{view()}</>;
}
