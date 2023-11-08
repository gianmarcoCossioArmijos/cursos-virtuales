import React, { useState } from 'react'

import { toast } from 'sonner';
import { ImArrowLeft } from "react-icons/im";

import { Link } from 'react-router-dom';
import { useUsuarios } from '../../hooks/useUsuarios.js'

const NuevaClave = () => {
  const [clave, setClave] = useState("");
  const [id, setId] = useState(localStorage.getItem('id'));

  const { nuevaClave } = useUsuarios();

  const handleSubmitCambiarClave = async (event) => {

    event.preventDefault();
    const response = await nuevaClave(id, clave);
  
    if (response) {
  
      setClave("")
      toast("Se cambio la contraseña exitosamente");
    } else {
       toast.error("Error al cambiar la contraseña");
    }
  }

  return (
    <section className='w-full min-h-screen p-6 flex flex-col gap-4 bg-gradient-to-b from-black/0 to-black/40'>

        <Link
            to="/menu"
            className='w-[100px] p-2 flex justify-center rounded-md bg-white/10'>
          <ImArrowLeft />
        </Link>
        
        <h5 className='w-full md:w-2/3 lg:w-2/5 md:mx-auto text-xl'>Cambiar Contraseña</h5>

        <form
            onSubmit={handleSubmitCambiarClave}
            className='w-full md:w-2/3 lg:w-2/5 md:mx-auto py-4 flex flex-col gap-6 justify-between'>

            <input
                type="text"
                name="clave"
                value={clave}
                onChange={event => setClave(event.target.value)}
                className='w-full p-2 rounded-md text-black'
                placeholder='Ingresa nueva contraseña'
                required/>

            <input
                type="submit"
                value="Registrar Contraseña"
                className='w-full h-fit p-3 flex justify-center gap-2 self-center rounded-md bg-yellow-600 hover:bg-yellow-500 font-bold'
                />

        </form>

    </section>
  )
}

export default NuevaClave