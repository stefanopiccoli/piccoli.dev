"use client";
import Image from "next/image";
import {
  Dispatch,
  SetStateAction,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const refs = useRef<any>([]);
  const gallery = ['S1.jpg','S2.jpg','SeJ.jpg','SeL.jpg']

  refs.current = gallery.map(
    (_, i) => refs.current[i] ?? createRef()
  );

  useEffect(() => {
    if (display === "gallery") {
      refs.current[menuItem].current?.scrollIntoView({block:"nearest", inline:"start"})
      console.log(refs.current[menuItem].current);
      
    }
  }, [menuItem]);

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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse qui
              eaque rerum quis unde numquam voluptas distinctio molestiae vitae
              saepe?
            </p>
          </>
        );
      case "gallery":
        return (
          <>
            <div className="grid grid-cols-2 h-full gap-2">
              {gallery.map((item, i) => (
                <Image
                  key={i}
                  src={"/images/gallery/"+item}
                  alt=""
                  width={300}
                  height={300}
                  className={"w-full h-full object-cover "+(menuItem === i ? "border-2 border-Nokia" : "")}
                  ref={refs.current[i]}
                />
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
