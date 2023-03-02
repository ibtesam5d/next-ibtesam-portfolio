import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='mt-[7rem] h-screen md:h-full'>
        <h2 className='font-semibold text-center text-2xl mb-8 md:text-3xl lg:text-4xl text-[#4db5ff]'>About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-8">
            {/* ====== Image ======== */}
            <div className="lg:col-span-1 md:w-[38%] lg:w-[65%] mx-auto rounded-3xl bg-gradient-to-tr from-[transparent] via-[#4db5ff] to-[transparent] grid place-items-center ">
                <Image src="/images/about.png" width={250} height={240} alt="Ibtesam's Photo" className='rounded-3xl rotate-6 hover:rotate-0 transition-all duration-500 ease'/>
            </div>
            {/* ====== Info ======== */}
            <div className="flex flex-col gap-6 px-4 md:px-8 lg:col-span-2 lg:justify-center">
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto earum dolorem expedita delectus. Quam enim distinctio laborum culpa repellendus! Commodi accusamus aut vel ad cum ipsa molestiae amet incidunt repudiandae?</p>
                <div className="flex gap-4 md:gap-8">
                <a href="#projects" className='px-4 py-2 border-[2px] border-[#4db5ff] text-gray-900 rounded-md bg-[#4db5ff] hover:bg-white hover:text-gray-900 hover:border-white'>My Projects</a>
                <a href="#contact" className='px-4 py-2 border-[2px] border-[#4db5ff] text-gray-900 rounded-md bg-[#4db5ff] hover:bg-white hover:text-gray-900 hover:border-white'>Contact Me</a>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About