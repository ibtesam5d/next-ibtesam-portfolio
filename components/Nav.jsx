import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
      <nav className="bg-black/20 w-max flex px-2 py-3 z-10 fixed left-[50%] md:left-[51%] translate-x-[-50%] md:translate-x-[-49%] bottom-[1rem] gap-3 rounded-[3rem] backdrop-blur-lg">
        <a
          href="#"
          className={activeNav === "#" ? "bg-[#4db5ff] text-gray-900 p-4 rounded-full flex text-[1.1rem]" : "bg-transparent p-4 rounded-full flex text-[1.1rem] text-white hover:bg-black/[0.3]"}
          onClick={() => setActiveNav("#")}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          className={activeNav === "#about" ? "bg-[#4db5ff] text-gray-900 p-4 rounded-full flex text-[1.1rem] " : "bg-transparent p-4 rounded-full flex text-[1.1rem] text-white hover:bg-black/[0.3]"}
          onClick={() => setActiveNav("#about")}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          className={activeNav === "#experience" ? "bg-[#4db5ff] text-gray-900 p-4 rounded-full flex text-[1.1rem] " : "bg-transparent p-4 rounded-full flex text-[1.1rem] text-white hover:bg-black/[0.3]"}
          onClick={() => setActiveNav("#experience")}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          className={activeNav === "#services" ? "bg-[#4db5ff] text-gray-900 p-4 rounded-full flex text-[1.1rem] " : "bg-transparent p-4 rounded-full flex text-[1.1rem] text-white hover:bg-black/[0.3]"}
          onClick={() => setActiveNav("#services")}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          className={activeNav === "#contact" ? "bg-[#4db5ff] text-gray-900 p-4 rounded-full flex text-[1.1rem] " : "bg-transparent p-4 rounded-full flex text-[1.1rem] text-white hover:bg-black/[0.3]"}
          onClick={() => setActiveNav("#contact")}
        >
          <BiMessageAltDetail />
        </a>
      </nav>
    );
  };

export default Nav