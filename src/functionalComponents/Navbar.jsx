import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex p-4 items-center justify-between bg-black text-white'>
      <Link to='/'>Home</Link>
      <div  className='flex p-4 text-sm items-center gap-2'>
        <Link to='/about'>about</Link>
        <Link to='/contact'>contact</Link>
        <a href='https://images.google.com/'>google</a>
      </div>
    </div>
  )
}

export default Navbar
