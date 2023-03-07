import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='mt-[7rem] h-screen md:h-full'>
        <h2 className='font-semibold text-center text-2xl mb-8 md:text-3xl lg:text-4xl text-[#4db5ff]'>About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-8">
            {/* ====== Image ======== */}
            <div className="lg:col-span-1 md:w-[30%] lg:w-[85%] xl:w-[65%] mx-auto rounded-3xl bg-gradient-to-tr from-[transparent] via-[#4db5ff] to-[transparent] grid place-items-center ">
                <Image src="/images/about.png" width={250} height={240} alt="Ibtesam's Photo" className='rounded-3xl rotate-6 hover:rotate-0 transition-all duration-500 ease'/>
            </div>
            {/* ====== Info ======== */}
            <div className="flex flex-col gap-6 px-4 md:px-8 lg:col-span-2 lg:justify-center">
                <p className=''>Aspiring software developer with 1.5 years of experience in web technologies. Recently, I pivoted my career from civil engineering to software development due to my passion for web development and problem-solving abilities.</p>

                <p>Currently, I focus on developing fully responsive and dynamic web applications. Besides using HTML/CSS and JavaScript, I typically use React as a front-end library. In addition, I use Next JS together with MongoDB to build full-stack web application.</p>
                <div className="flex gap-4 md:gap-8">
                <Link scroll={false} href="#projects" className='px-4 py-2 border-[2px] border-[#4db5ff] text-gray-900 rounded-md bg-[#4db5ff] hover:bg-white hover:text-gray-900 hover:border-white'>My Projects</Link>
                <Link scroll={false} href="#contact" className='px-4 py-2 border-[2px] border-[#4db5ff] text-gray-900 rounded-md bg-[#4db5ff] hover:bg-white hover:text-gray-900 hover:border-white'>Contact Me</Link>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About