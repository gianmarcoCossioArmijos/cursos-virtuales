import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"

import { useUsuarios } from '../hooks/useUsuarios.js'
import { login } from '../store/authSlice'

import { toast } from 'sonner';

const Login = () => {
  const [ usuario, setUsuario ] = useState({
    dni: "",
    clave: "",
  });

  const { iniciarSesion } = useUsuarios();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {

    const value = event.target.value;
    const name = event.target.name;
    setUsuario({...usuario, [name]: value})
  }

  const handleSubmit = async(event) => {

    event.preventDefault();
    const response = await iniciarSesion(usuario.dni, usuario.clave);

    if (response === "error") {

      toast.error("El usuario no esta registrado");
    } else {

      response.map(user => {
          
        if (user.clave === usuario.clave) {
    
          localStorage.setItem('auth', user.sesion);
          localStorage.setItem('rol', user.rol);
          localStorage.setItem('dni', user.dni);
          localStorage.setItem('id', user.id);
    
          dispatch(login({auth: user.sesion, rol: user.rol}));
          navigate("/menu")
          toast("Bienvenido nuevamente!");
        } else {

          dispatch(login({auth: user.sesion, rol: user.rol}));
          toast.error("Contraseña o usuario incorrectos");
        }
      });
    }

    setUsuario({
      dni: "",
      clave: "",
    });
  }

  return (
    <div className='w-full min-h-screen flex flex-col gap-12 bg-gradient-to-b from-black/0 to-black/40'>

        <h4 className='w-full md:w-2/3 lg:w-2/5 md:mx-auto pt-10 pb-4 text-3xl text-center'>
            <strong>Nagkamtae</strong>
        </h4>

        <form
            onSubmit={handleSubmit}
            className='w-full md:w-2/3 lg:w-2/5 md:mx-auto px-6 flex flex-col gap-4 justify-center'>

            <label className='flex flex-col gap-1'>
                DNI
                <input
                    type="text"
                    name="dni"
                    value={usuario.dni}
                    onChange={handleChange}
                    className='p-2 rounded-md text-black'
                    placeholder='Ingresa tu DNI'
                    required/>
            </label>

            <label className='flex flex-col gap-1'>
                Contraseña
                <input
                    type="password"
                    name="clave"
                    value={usuario.clave}
                    onChange={handleChange}
                    className='p-2 rounded-md text-black'
                    placeholder='Ingresa tu Contraseña'
                    required/>
            </label>

            <input
                type="submit"
                value="Wayata"
                className='w-full h-fit mx-auto mt-6 p-3 flex justify-center gap-2 rounded-md bg-yellow-600 hover:bg-yellow-500 font-bold'
                />

        </form>

        <span className='w-full md:w-2/3 lg:w-2/5 md:mx-auto px-6 flex gap-2 text-center'>
          ¿Eke agatmatsumek?
          <Link
              className='text-yellow-500 font-bold'
              to="/registrar">
            Agatmamjata
          </Link>
        </span>

    </div>
  )
}

export default Login