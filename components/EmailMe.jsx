
const EmailMe = () => {
  return (
    <section id="contact" className="mt-[7rem] h-full">
      <h2 className='font-semibold text-center text-2xl mb-8 md:text-3xl lg:text-4xl text-[#4db5ff]'>Contact Me</h2>

      <div className="px-4 lg:w-[600px] xl:py-8 mx-auto">
        <form action="" className="flex flex-col gap-6">
          <input type="text" placeholder="your full name" className="bg-transparent border-[1px] border-[#4db5ff] text-gray-400 px-4 py-4 rounded-lg"/>
          <input type="email" placeholder="your email" className="bg-transparent border-[1px] border-[#4db5ff] text-gray-400 px-4 py-4 rounded-lg"/>
          <textarea placeholder="your message" className="bg-transparent border-[1px] border-[#4db5ff] text-gray-400 px-4 py-6 rounded-lg"/>
          <button type="submit" className='md:text-lg px-2 py-2 border-[2px] border-[#4db5ff] text-gray-900 rounded-md bg-[#4db5ff] hover:bg-white hover:text-gray-900 hover:border-white'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default EmailMe