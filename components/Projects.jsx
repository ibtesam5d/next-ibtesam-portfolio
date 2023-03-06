import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {data} from "./projectData"
import {AiFillGithub} from "react-icons/ai"

const Projects = () => {
  const [projectData, setProjectData] = useState(data)

  return (
    <section id='projects' className='mt-[7rem] h-full'>
        <h2 className='font-semibold text-center text-2xl mb-8 md:text-3xl lg:text-4xl text-[#4db5ff]'>My Projects</h2>
        <div className="grid grid-cols-1 gap-8 lg:gap-8 xl:gap-8 xl:grid-cols-1  ">

            {projectData.map((item)=>{
              const {id,title,img,desc,gitUrl,liveUrl} = item
              return(
                <div key={id} className="bg-[#2c2c6c] border-[1px] border-transparent rounded-3xl md:px-2 px-6 py-14 transition-all duration-400 ease hover:bg-transparent hover:border-[#4db5ff66] grid grid-cols-1 gap-6 md:place-items-center xl:grid-cols-3">
                  
                  <div className="lg:px-6 xl:col-span-1 grid place-items-center w-full">
                    <Image src={img} width={450} height={400} alt={title} className="object-contain rounded-2xl"/>
                  </div>

                  
                  <div className="grid place-items-start gap-6 md:px-8 xl:col-span-2">
                    <p className="text-2xl lg:text-3xl text-[#4db5ff]">{title}</p>
                    <p className="text-white/75 text-md leading-7 lg:leading-8">{desc}</p>

                    <div className="flex gap-4 md:gap-8">
                      <Link href={liveUrl} target="_blank" className='md:text-lg px-2 py-2 border-[2px] border-[#4db5ff] text-gray-900 rounded-md bg-[#4db5ff] hover:bg-white hover:text-gray-900 hover:border-white'>Live Demo</Link>
                      <Link href={gitUrl} target="_blank" className='md:text-lg px-2 py-2 border-[2px] border-[#4db5ff] text-gray-900 rounded-md bg-[#4db5ff] hover:bg-white hover:text-gray-900 hover:border-white flex gap-2 items-center'>
                        <AiFillGithub size={15}/>
                        GitHub</Link>
                    </div>
                  </div>
                </div>
              )
            })} 
        </div>
    </section>
  )
}

export default Projects