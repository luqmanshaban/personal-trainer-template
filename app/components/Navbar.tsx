import React, { useState } from 'react'
import { LuHeartPulse } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [active, setActive] = useState(false)
    const toggleActive = () => setActive(!active)
  return (
    
      <div className='flex justify-between items-center'>
          <div className='flex items-center gap-1'>
              <p><LuHeartPulse className='text-wh text-2xl'/></p>
              <p className='text-wh text-md'><b>Bulk</b>ing</p>
          </div>
          <div className=''>
              <ul className='hidden md:flex justify-between items-center gap-10'>
                  <li className='text-wh font-medium cursor-pointer'>Home</li>
                  <li className='text-wh/80 cursor-pointer'>Programs</li>
                  <li className='text-wh/80 cursor-pointer'>Products</li>
                  <li className='text-wh/80 cursor-pointer'>Blog</li>
                  <li className='text-wh/80 cursor-pointer'>Contact</li>
              </ul>
             {active &&  <ul className='block md:hidden flex-col justify-between items-center gap-4 bg-prim fixed top-0 right-0 h-full w-full transition ease-in-out duration-500 p-5 pt-10 z-40'>
                  <li className='text-wh font-medium cursor-pointer'>Home</li>
                  <li className='text-wh/80 cursor-pointer'>Programs</li>
                  <li className='text-wh/80 cursor-pointer'>Products</li>
                  <li className='text-wh/80 cursor-pointer'>Blog</li>
                  <li className='text-wh/80 cursor-pointer'>Contact</li>
              </ul>}
              <button className='bg-wh p-2 rounded-full md:hidden' onClick={toggleActive}>
                  <IoIosMenu className='text-lg text-bl'/>
              </button>
              {active && <button className='bg-wh p-2 rounded-full md:hidden fixed z-50 top-4 right-4' onClick={toggleActive}>
                  <IoMdClose className='text-lg text-bl'/>
              </button>}
          </div>
    </div>
  )
}

export default Navbar