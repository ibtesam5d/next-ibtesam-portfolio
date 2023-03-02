import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#4db5ff] py-20 text-center mt-[7rem] text-gray-900 ">

      <ul className="flex flex-col gap-4 text-[#1f1f38] text-lg lg:text-xl lg:flex-row justify-center lg:gap-8 md:font-semibold">
        <li>
          <a className="" href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="flex gap-8 py-6 md:py-10 items-center justify-center md:text-2xl">
        
        <a href="#">
          <BsGithub />
        </a>
        <a href="#">
          <BsTwitter />
        </a>
        <a href="#">
          <BsLinkedin />
        </a>
      </div>

      <div className="mb-6">
        <small className="md:text-sm">&copy; Md Ibtesam Hossain | NextJs Portfolio</small>
      </div>
    </footer>
  );
};

export default Footer;
