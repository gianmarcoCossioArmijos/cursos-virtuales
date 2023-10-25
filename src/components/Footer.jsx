import React from 'react'

import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='w-full px-6 py-10 flex flex-col justify-evenly text-slate-600 bg-black/30'>

      <div className='py-4 flex justify-evenly gap-2'>

        <div className='flex gap-2 self-center'>
          <AiFillFacebook />
          <AiFillTwitterSquare />
        </div>

        <div className='flex gap-2 self-center'>
          <span>ugkum18@gmail.com</span>
        </div>

      </div>

      <h3 className='m-auto'>Derechos reservados - BIKUT 2023</h3>
    
    </footer>
  )
}

export default Footer