import React from 'react'
import { Link } from 'react-router-dom'

import { BsFillCollectionPlayFill } from "react-icons/bs";

const MenuDocente = () => {
  return (
    <>

        <h3 className='w-full md:w-2/3 lg:w-3/5 md:mx-auto text-xl'>Administracion</h3>
        
        <Link
            to="/nuevo-libro"
            className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex justify-between gap-2 rounded-md bg-white/10 hover:bg-black/10 border shadow-lg'>
            Registrar Nuevo Curso
            <BsFillCollectionPlayFill className='self-center'/>
        </Link>

    </>
  )
}

export default MenuDocente