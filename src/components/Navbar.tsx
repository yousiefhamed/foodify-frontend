"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ColorfulContainer from "@/components/utils/ColorfulContainer";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { GrCircleQuestion } from "react-icons/gr";
import { MdOutlineHome, MdPersonOutline } from "react-icons/md";
import { PiGearBold } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="relative w-full h-full flex md:flex-col flex-row md:justify-start justify-between items-center gap-10 px-3 md:py-10 bg-white">
      <div className="w-24 flex justify-center items-center grow-0 shrink-0">
        <Link
          href="/"
          className="bg-[#FFEFE5] rounded-full border-2 border-[#FFE7D7] p-1"
        >
          <Image
            src="/foodify.png"
            alt="foodify logo"
            width={300}
            height={300}
            className="w-14 h-14 object-contain"
          />
        </Link>
      </div>
      <div
        className={`${
          showMenu
            ? "flex md:relative absolute md:top-0 top-full right-0"
            : "hidden"
        } md:flex flex-col md:justify-center justify-start items-center gap-8 md:w-full w-20 md:p-0 py-5 md:rounded-bl-none rounded-bl-lg backdrop-blur-lg`}
      >
        <Link href="/" className="inline-block">
          <ColorfulContainer bgColor="#FF6380">
            <MdOutlineHome className="text-white text-3xl font-normal" />
          </ColorfulContainer>
        </Link>
        <Link href="/account" className="inline-block">
          <ColorfulContainer bgColor="#F19C2D">
            <MdPersonOutline className="text-white text-3xl font-normal" />
          </ColorfulContainer>
        </Link>
        <Link href="/wishlist" className="inline-block">
          <ColorfulContainer bgColor="#CC77FF">
            <FaRegHeart className="text-white text-3xl font-normal" />
          </ColorfulContainer>
        </Link>
        <Link href="/messages" className="inline-block">
          <ColorfulContainer bgColor="#6A64D4">
            <BiMessageDetail className="text-white text-3xl font-normal" />
          </ColorfulContainer>
        </Link>
        <Link href="/settings" className="inline-block">
          <ColorfulContainer bgColor="#3EC278">
            <PiGearBold className="text-white text-3xl font-normal" />
          </ColorfulContainer>
        </Link>
        <Link href="/about" className="inline-block">
          <ColorfulContainer bgColor="#FF944F">
            <GrCircleQuestion className="text-white text-3xl font-normal" />
          </ColorfulContainer>
        </Link>
      </div>
      <div className="md:hidden block">
        <button onClick={toggleMenu} className="p-2 rounded-full">
          <HiMenuAlt3 className="text-black text-4xl font-normal" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
