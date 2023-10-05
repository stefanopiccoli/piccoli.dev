"use client";
import Image from "next/image";
import Display from "./Display";
import { useState } from "react";

export default function Mockup() {
  const [display, setDisplay] = useState("home");

  //MENU
  const [menuItem, setMenuItem] = useState(0); //ACTUALLY VISIBLE MENU ITEM
  const menuItems = [
    {
      src: "/images/ContactsPixeled.png",
      title: "Contacts",
      action: () => setDisplay("contacts"),
    },
    {
      src: "/images/GithubPixeled.png",
      title: "Github",
      action: () => window.open("https://github.com/stefanopiccoli", "_blank"),
    },
    {
      src: "/images/InstagramPixeled.png",
      title: "Instagram",
      action: () =>
        window.open("https://www.instagram.com/im_stefano/", "_blank"),
    },
    {
      src: "/images/GalleryPixeled.png",
      title: "Gallery",
      action: () => setDisplay("gallery"),
    },
  ];

  //BUTTON MANAGEMENT
  const handleMiddleButton = () => {
    switch (display) {
      case "home":
        if (display === "home") setDisplay("menu");
        else setDisplay("home");
        break;
      case "menu":
        menuItems[menuItem].action();
        break;
    }
  };

  const handleUpButton = () => {
    setMenuItem(
      (item) =>
        (((item + 1) % menuItems.length) + menuItems.length) % menuItems.length
    );
  };
  const handleDownButton = () => {
    setMenuItem(
      (item) =>
        (((item - 1) % menuItems.length) + menuItems.length) % menuItems.length
    );
  };
  const handlePhoneButton = () => {
    switch (display) {
      case "home":
        break;
      case "menu":
        setDisplay("home");
        break;
    }
  };
  return (
    <div className="relative w-[300px] h-[800px]">
      <Image
        src="/images/nokia3310background.png"
        className="absolute top-[12rem] left-10 w-56 h-[10.2rem] rounded-2xl"
        alt="nokia 3310 bg"
        width={1000}
        height={1000}
      />
      <Image
        src="/images/nokia3310mockup.png"
        className="absolute"
        alt="nokia 3310"
        width={1000}
        height={1000}
      />
      <div className="absolute font-Nokia px-2 py-4 top-[12rem] left-10 w-56 h-[10.2rem] rounded-2xl text-Nokia font-light overflow-scroll">
        <Display
          display={display}
          setDisplay={setDisplay}
          menuItems={menuItems}
          menuItem={menuItem}
        />
      </div>
      <div
        className="absolute w-[8.1rem] h-9 bg-green-600 top-[24.2rem] left-[5.4rem] rounded-b-full opacity-0"
        onClick={handleMiddleButton}
      ></div>
      <div
        className="absolute w-[2.5rem] h-10 bg-red-600 top-[25.5rem] left-[13.6rem] -rotate-[29deg] opacity-0"
        onClick={handleUpButton}
      ></div>
      <div
        className="absolute w-[3.2rem] h-10 bg-blue-600 top-[27rem] left-[10.5rem] -rotate-[20deg] opacity-0"
        onClick={handleDownButton}
      ></div>
      <div
        className="absolute w-[4rem] h-8 bg-yellow-600 top-[26rem] left-[2.5rem] rotate-[35deg] opacity-0"
        onClick={handlePhoneButton}
      ></div>
    </div>
  );
}
