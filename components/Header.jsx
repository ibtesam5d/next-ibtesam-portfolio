import Image from "next/image"
import Link from "next/link"
import {BsLinkedin,BsGithub} from "react-icons/bs"


const Header = () => {
  return (
    <header id="header" className="pt-[7rem] h-screen overflow-hidden">
        <div className="text-center h-full relative">
            <h3 className="font-semibold mb-2 lg:text-lg">Hello, I am</h3>
            <h1 className="text-3xl lg:text-5xl font-semibold mb-3">Md Ibtesam Hossain</h1>
            <h2 className="font-semibold mb-2 lg:text-xl tracking-wider text-white/75">Front-end Developer</h2>
            <div className="my-[2.5rem] flex gap-[1.2rem] lg:gap-10 justify-center">
                <a href="/Md Ibtesam Hossain Resume.pdf" download className="px-2 md:px-4 py-3 border-[2px] border-[#4db5ff] text-[#4db5ff] rounded-md hover:bg-white hover:text-gray-900 hover:border-white">Download Resume</a>
                <a href="#contact" className="px-2 md:px-4 py-3 border-[2px] border-[#4db5ff] text-gray-900 rounded-md bg-[#4db5ff] hover:bg-white hover:text-gray-900 hover:border-white">Contact Me</a>
            </div>
            {/* ====== Social Links ======= */}
            <div className="hidden md:flex flex-col absolute left-9 bottom-8 gap-4 items-center">
                <Link href={"https://www.linkedin.com/in/md-ibtesam/"} target="_blank"><BsLinkedin size={20} className="text-[#4db5ff] cursor-pointer"/></Link>
                <Link href={"https://github.com/ibtesam5d"} target="_blank"><BsGithub size={20} className="text-[#4db5ff] cursor-pointer"/></Link>
                <div className="w-[1px] h-10 bg-[#4db5ff]"></div>
            </div>
            {/*===== Portfolio Image ====*/}
            <div className="bg-gradient-to-b from-[#4db5ff] to-[transparent] md:w-72 md:h-[20rem] w-64 h-[18rem] rounded-t-full absolute overflow-hidden mt-8" style={{left: `calc(50% - 8rem`}}>
                <Image className="object-cover mx-auto mt-[4rem] md:mt-[5rem]" src="/images/header_1.png" width={220} height={220} alt="ibtesam's photo" />
            </div>

            {/* ======= scroll down ======== */}
            <div className="hidden md:flex flex-col absolute right-3 bottom-16 items-center">
                <Link scroll={false} href="#contact" className="rotate-90 text-[#4db5ff] cursor-pointer">scroll down</Link>
            </div>
        </div>
    </header>
  )
}

export default Header