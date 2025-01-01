import React from 'react'

const Navbar = () => {
  return (
      <div className='flex justify-between items-center'>
          <div className='flex items-center gap-1'>
              <p className='text-wh text-md'><b>Bulk</b>ing</p>
          </div>
          <div className=''>
              <ul className='flex justify-between items-center gap-10'>
                  <li className='text-wh font-medium cursor-pointer'>Home</li>
                  <li className='text-wh/80 cursor-pointer'>Programs</li>
                  <li className='text-wh/80 cursor-pointer'>Products</li>
                  <li className='text-wh/80 cursor-pointer'>Blog</li>
                  <li className='text-wh/80 cursor-pointer'>Contact</li>
              </ul>
          </div>
    </div>
  )
}

export default Navbar