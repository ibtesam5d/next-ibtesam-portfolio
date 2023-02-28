import { useState } from "react"
import {expDataFront,expDataBack} from "./expData"

const Experienc = () => {
  const [front, setFront] = useState(expDataFront)
  const [back, setBack] = useState(expDataBack)
  return (
    <section id='experience' className='mt-[7rem] h-screen md:h-full'>
      <h2 className='font-semibold text-center text-2xl mb-8 md:text-3xl lg:text-4xl text-[#4db5ff]'>My Experience</h2>

      {/* ====== skills grid container ========= */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-14">

        {/* === Front-end Skills === */}

        <div className="bg-[#2c2c6c] border-[1px] border-transparent rounded-3xl md:px-2 px-8 py-14 transition-all duration-400 ease hover:bg-transparent hover:border-[#4db5ff66]">
          <h3 className="text-center mb-8 text-[#4db5ff] text-lg">Front-end Skills</h3>

          {/* === Skills === */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8 md:place-items-center">
            {front.map((skill)=>(<article 
            className="flex gap-4" key={skill.id}>
              <span className="mt-[6px] sm:text-2xl">{skill.icon}</span>
              <div className="">
                <h4>{skill.title}</h4>
                <small>{skill.level}</small>
              </div>
            </article>))}
          </div>
        </div>
      
        {/* === Back-end Skills === */}

        <div className="bg-[#2c2c6c] border-[1px] border-transparent rounded-3xl md:px-2 px-8 py-14 transition-all duration-400 ease hover:bg-transparent hover:border-[#4db5ff66]">
          <h3 className="text-center mb-8 text-[#4db5ff] text-lg">Back-end Skills</h3>
          <div className="grid grid-cols-2 gap-6 lg:gap-8 md:place-items-center">
            {back.map((skill)=>(<article className="flex gap-4" key={skill.id}>
            <span className="mt-[6px] sm:text-2xl">{skill.icon}</span>
              <div className="">
                <h4>{skill.title}</h4>
                <small>{skill.level}</small>
              </div>
            </article>))}
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Experienc