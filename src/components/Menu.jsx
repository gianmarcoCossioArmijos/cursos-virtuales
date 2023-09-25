import React from 'react'

import { useSelector  } from "react-redux"
import { Link } from 'react-router-dom'

const Menu = () => {

  const menu = useSelector((state) => state.menu);

  return (
    <div className={`${menu} h-full flex flex-col gap-12 absolute bg-black/80 overflow-hidden font-bold text-xl text-center`}>

        <Link
            to="/"
            className='px-6 pt-20'>
          Inicio
        </Link>

        <Link
            to="/cursos"
            className='px-6'>
          Cursos
        </Link>

        <Link
            to="/registrar"
            className='px-6 pb-20'>
          Registrarme
        </Link>

    </div>
  )
}

export default Menu