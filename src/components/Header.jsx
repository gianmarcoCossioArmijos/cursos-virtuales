import React, { useEffect, useState } from 'react'

import { CgMenuGridR } from "react-icons/cg";

import { useDispatch, useSelector  } from "react-redux"
import { useUsuarios } from '../hooks/useUsuarios.js'
import { hidde, show } from '../store/menuSlice'

import LogoutButtons from './header-components/LogoutButtons';
import LoginButtons from './header-components/LoginButtons';

const Header = () => {

  const dispatch = useDispatch();
  const [ isAuth, setIsAuth ] = useState();

  const menu = useSelector((state) => state.menu);
  const auth = useSelector((state) => state.auth);

  const { verificarUsuario } = useUsuarios();
  const { cerrarSesion } = useUsuarios();

  useEffect(() => {

    const auth = localStorage.getItem('auth') || "false";

    if (auth === "false") {

      localStorage.setItem('auth', JSON.stringify(false));
      localStorage.setItem('rol', JSON.stringify(false));
      localStorage.removeItem('dni');
      localStorage.removeItem('id');

      setIsAuth("false")
      cerrarSesion();
    } else {

      const dni = localStorage.getItem('dni');
      verificarUsuario(dni);
      setIsAuth("true")
    }

  }, [])

  useEffect(() => {

    setIsAuth(localStorage.getItem('auth'));
  }, [auth])

  const handleClick = () => {

    if (menu === "open") {
        
        dispatch(hidde());
    } else {
        
        dispatch(show());
    }
  }
  
  return (
    <header className='w-full h-20 px-2 flex justify-between bg-black/50'>

        <div className='h-full flex gap-2'>

            <CgMenuGridR
                  onClick={handleClick}
                  className='w-9 h-9 m-auto hover:bg-white/10 rounded-md'/>

            <img
                src="https://i.postimg.cc/pXyvPrSd/bikut.png"
                className='h-6 m-auto'
                alt="logo" />

        </div>

        <div className='h-full flex gap-2'>

            {isAuth === "false" ? <LoginButtons /> : <LogoutButtons />}

        </div>
    
    </header>
  )
}

export default Header