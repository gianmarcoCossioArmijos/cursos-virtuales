import React from 'react'

import { useSelector  } from "react-redux"
import { Link } from 'react-router-dom'

const Menu = () => {

  const menu = useSelector((state) => state.menu);

  return (
    <div className={`${menu} h-full flex flex-col gap-12 absolute bg-black/80 overflow-hidden font-bold text-xl text-center`}>

        <Link
            to="/"
            className='w-[170px] h-fit p-3 mt-20 self-center bg-yellow-600 hover:bg-yellow-500 rounded-md'>
          Nagkabau
        </Link>

        <Link
            to="/cursos"
            className='w-[170px] h-fit p-3 self-center bg-yellow-600 hover:bg-yellow-500 rounded-md'>
          Tu juwaji
        </Link>

        <Link
            to="/registrar"
            className='w-[170px] h-fit p-3 mb-20 self-center bg-yellow-600 hover:bg-yellow-500 rounded-md'>
          Agatmamtae
        </Link>

    </div>
  )
}

export default Menu