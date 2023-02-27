import Image from "next/image"
import {BsLinkedin,BsGithub} from "react-icons/bs"


const Header = () => {
  return (
    <header className="pt-[7rem] h-screen overflow-hidden mx-auto w-[90%]">
        <div className="text-center h-full relative">
            <h3 className="font-semibold mb-2">Hello, I am</h3>
            <h1 className="text-3xl font-semibold mb-3">Md Ibtesam Hossain</h1>
            <h2 className="font-semibold mb-2">Front-end Developer</h2>
            <div className="mt-[2.5rem] flex gap-[1.2rem] justify-center">
                <a href="" className="px-4 py-3 border-[2px] border-[#4db5ff] text-[#4db5ff] rounded-md hover:bg-white hover:text-gray-900 hover:border-white">Download Resume</a>
                <a href="" className="px-4 py-3 border-[2px] border-[#4db5ff] text-gray-900 rounded-md bg-[#4db5ff] hover:bg-white hover:text-gray-900 hover:border-white">Let's Talk</a>
            </div>
            {/* ====== Social Links ======= */}
            <div className="hidden md:flex flex-col absolute left-3 bottom-4 gap-4 items-center">
                <BsLinkedin size={20} className="text-[#4db5ff]"/>
                <BsGithub size={20} className="text-[#4db5ff]"/>
                <div className="w-[1px] h-10 bg-[#4db5ff]"></div>
            </div>
            {/*===== Portfolio Image ====*/}
            <div className="bg-gradient-to-b from-[#4db5ff] to-[transparent] w-64 h-[20rem] rounded-t-full absolute overflow-hidden mt-8" style={{left: `calc(50% - 8rem`}}>
                <Image className="object-cover mx-auto mt-11" src="/images/Portrait.png" width={200} height={200} alt="ibtesam's photo" />
            </div>

            {/* ======= scroll down ======== */}
            <div className="hidden md:flex flex-col absolute right-3 bottom-12 items-center">
                <a href="#" className="rotate-90 text-[#4db5ff] cursor-pointer">scroll down</a>
            </div>
        </div>
    </header>
  )
}

export default Header