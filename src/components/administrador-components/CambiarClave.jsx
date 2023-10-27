import React, { useState } from 'react'

import { useUsuarios } from '../../hooks/useUsuarios.js'
import { Link } from 'react-router-dom';

import { ImArrowLeft } from "react-icons/im";
import { toast } from 'sonner';

const CambiarClave = () => {
  const [ dni, setDni ] = useState("");
  const [ usuario, setUsuario ] = useState({})
  const [ clave, setClave ] = useState("");

  const {buscarUsuario } = useUsuarios();
  const {cambiarClave } = useUsuarios();

  const handleSubmitBuscador = async(event) => {

    event.preventDefault();
    const usuario = await buscarUsuario(dni);

    if (JSON.stringify(usuario) !== "[]") {

        setUsuario(usuario[0]);
        toast("Usuario encontrado")
    } else {

        toast.error("Usuario no encontrado")
    }
  }

  const handleClickCambiarClave = async () => {

    if (usuario.id) {

        const response = await cambiarClave(usuario.id);
    
        if (response) {
    
            setClave(response)
            toast("Se cambio la contraseña exitosamente");
        } else {
            toast.error("Error al cambiar la contraseña");
        }
    } else {
        toast.error("Debe buscar un usuario para cambiar contraseña");
    }
  }

  return (
    <section className='w-full min-h-screen p-6 flex flex-col gap-4 bg-gradient-to-b from-black/0 to-black/40'>

        <Link
            to="/menu"
            className='w-[100px] p-2 flex justify-center rounded-md bg-white/10'>
          <ImArrowLeft />
        </Link>
        
        <h5 className='w-full md:w-2/3 lg:w-2/5 md:mx-auto text-xl'>Buscar usuario por DNI</h5>

        <form
            onSubmit={handleSubmitBuscador}
            className='w-full md:w-2/3 lg:w-2/5 md:mx-auto py-4 flex gap-2 justify-between'>

            <input
                type="text"
                name="dni"
                value={dni}
                onChange={event => setDni(event.target.value)}
                className='w-3/4 p-2 rounded-md text-black'
                placeholder='Ingresa dni'
                required/>

            <input
                type="submit"
                value="Buscar"
                className='w-1/4 h-fit p-3 flex justify-center gap-2 self-center rounded-md bg-yellow-600 hover:bg-yellow-500 font-bold'
                />

        </form>

        <h5 className='h-[50px] p-3 flex justify-center rounded-md bg-white/10'>
            {clave}
        </h5>

        <button
            onClick={handleClickCambiarClave}
            className='w-full h-fit p-3 flex justify-center gap-2 self-center rounded-md bg-yellow-600 hover:bg-yellow-500 font-bold'>
            Cambiar Contraseña
        </button>

    </section>
  )
}

export default CambiarClave