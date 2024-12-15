import Link from 'next/link'
import React from 'react'

 const Navbar = () => {
  return (
    <div className='bg-slate-800 text-white'>
        <ul className='flex justify-end p-3 gap-4 '>
            <li className='hover:text-rose-800 transition duration-300'>
                <Link href={'/'}> Home</Link>
            </li>
            <li className='hover:text-rose-800 duration-300'>
                <Link href={'/about'}>About</Link>
            </li>
            <li className='hover:text-rose-800 duration-300'>
                <Link href={'/contact'}>Contact</Link>
            </li>
        </ul>

    </div>
  )
}
export default Navbar
