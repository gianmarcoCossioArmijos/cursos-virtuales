import React from 'react'
import { Link } from 'react-router-dom'

import { BsFillCollectionPlayFill } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { PiUserPlusFill } from "react-icons/pi";
import { PiUsersFourFill } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiUsersFill } from "react-icons/pi";
import { FaKey } from "react-icons/fa6";

const MenuAdministracion = () => {
  return (
    <>

        <h3 className='w-full md:w-2/3 lg:w-3/5 md:mx-auto text-xl'>Administracion</h3>

        <Link
            to="/lista-precios"
            className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex justify-between gap-2 rounded-md bg-white/10 hover:bg-black/10 border shadow-lg'>
            Precios por Curso
            <ImPriceTags className='self-center'/>
        </Link>

        <Link
            to="/registrar-administrador"
            className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex justify-between gap-2 rounded-md bg-white/10 hover:bg-black/10 border shadow-lg'>
            Registrar nuevo Docente o Administrador
            <PiUserPlusFill className='self-center'/>
        </Link>

        <Link
            to="/lista-usuarios"
            className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex justify-between gap-2 rounded-md bg-white/10 hover:bg-black/10 border shadow-lg'>
            Lista de Usuarios
            <PiUsersFourFill className='self-center'/>
        </Link>

        <Link
            to="/lista-docentes"
            className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex justify-between gap-2 rounded-md bg-white/10 hover:bg-black/10 border shadow-lg'>
            Lista de Docentes
            <PiUsersThreeFill className='self-center'/>
        </Link>

        <Link
            to="/lista-administradores"
            className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex justify-between gap-2 rounded-md bg-white/10 hover:bg-black/10 border shadow-lg'>
            Lista de Administradores
            <PiUsersFill className='self-center'/>
        </Link>

        <Link
            to="/cambiar-clave"
            className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex justify-between gap-2 rounded-md bg-white/10 hover:bg-black/10 border shadow-lg'>
            Resetear Contraseñas
            <FaKey className='self-center'/>
        </Link>
        
        <Link
            to="/nuevo-libro"
            className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex justify-between gap-2 rounded-md bg-white/10 hover:bg-black/10 border shadow-lg'>
            Registrar Nuevo Curso
            <BsFillCollectionPlayFill className='self-center'/>
        </Link>

        <Link
            to="/registrar-compra"
            className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex justify-between gap-2 rounded-md bg-white/10 hover:bg-black/10 border shadow-lg'>
            Registrar Compra de Usuario
            <BsFillCartPlusFill className='self-center'/>
        </Link>

    </>
  )
}

export default MenuAdministracion