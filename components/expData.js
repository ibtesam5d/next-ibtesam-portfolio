import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPhp, SiNextdotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";

export const expDataFront = [
  {
    id: 0,
    title: "HTML",
    level: "Expeirenced",
    icon: <AiFillHtml5 className="text-red-700" />,
  },
  {
    id: 1,
    title: "CSS",
    level: "Experienced",
    icon: <IoLogoCss3 className="text-blue-400" />,
  },
  {
    id: 2,
    title: "JavaScript",
    level: "Expeirenced",
    icon: <IoLogoJavascript className="text-yellow-200" />,
  },
  {
    id: 3,
    title: "Bootstrap",
    level: "Intermediate",
    icon: <BsBootstrapFill className="text-purple-700" />,
  },
  {
    id: 4,
    title: "Tailwind",
    level: "Expeirenced",
    icon: <SiTailwindcss className="text-cyan-500" />,
  },
  {
    id: 5,
    title: "React",
    level: "Expeirenced",
    icon: <FaReact className="text-[#4db5ff]" />,
  },
];

export const expDataBack = [
  {
    id: 0,
    title: "Next JS",
    level: "Intermediate",
    icon: (
      <SiNextdotjs className="text-gray-900 bg-white rounded-full p-[2px]" />
    ),
  },
  {
    id: 1,
    title: "MongoDB",
    level: "Intermediate",
    icon: <SiMongodb className="text-green-500" />,
  },
  {
    id: 2,
    title: "PHP",
    level: "Basic",
    icon: <SiPhp className="text-slate-600  bg-white rounded-full p-[2px]" />,
  },
  {
    id: 3,
    title: "MySQL",
    level: "Basic",
    icon: <GrMysql className="text-cyan-900  bg-white rounded-full p-[2px]" />,
  },
];
