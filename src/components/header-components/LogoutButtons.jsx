import React from 'react'
import { Link } from 'react-router-dom'

import { BsPersonVideo2 } from "react-icons/bs";
import { ImExit } from "react-icons/im";

import { useUsuarios } from '../../hooks/useUsuarios.js'

const LogoutButtons = () => {

  const { cerrarSesion } = useUsuarios();

  const handleClick = () => {

    cerrarSesion();
  }

  return (
    <>
        <button
            onClick={handleClick}
            className='h-fit px-3 py-2 self-center bg-yellow-600 hover:bg-yellow-500 rounded-md text-sm'>
            <ImExit className='w-[20px] h-[20px]'/>
        </button>

        <Link
            to="/menu"
            className='h-fit px-3 py-2 self-center bg-white/10 hover:bg-white/20 rounded-md text-sm'>
            <BsPersonVideo2 className='w-[20px] h-[20px]'/>
        </Link>
    </>
  )
}

export default LogoutButtons