import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { useUsuarios } from '../../hooks/useUsuarios.js'

import { FaDeleteLeft } from "react-icons/fa6";
import { ImArrowLeft } from "react-icons/im";
import { toast } from 'sonner';

const ListaDocentes = () => {
  const [ usuarios, setUsuarios ] = useState([]);

  const { reportarUsuarios } = useUsuarios();
  const { eliminarUsuario } = useUsuarios();

  useEffect(() => {

    reportarUsuarios()
      .then(usuarios => {

        const nuevosUsuarios = usuarios.filter((usuario) => usuario.rol.toLowerCase().includes("docente") === true);
        setUsuarios(nuevosUsuarios);
      });
  }, [])

  const handleClick = async (id) => {

    const response = await eliminarUsuario(id);

    if (response === "true") {

        toast("Docente eliminado exitosamente");
        reportarUsuarios()
            .then(usuarios => {

                const nuevosUsuarios = usuarios.filter((usuario) => usuario.rol.toLowerCase().includes("docente") === true);
                setUsuarios(nuevosUsuarios);
            });
    }
  }

  return (
    <section className='w-full min-h-screen px-6 pt-6 pb-20 flex flex-col gap-4 bg-gradient-to-b from-black/0 to-black/40'>

        <Link
            to="/menu"
            className='w-[100px] p-2 flex justify-center rounded-md bg-white/10'>
          <ImArrowLeft />
        </Link>
        
        <h5 className='w-full md:w-2/3 lg:w-3/5 md:mx-auto text-xl'>Lista de Docentes</h5>

        <div className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex flex-col justify-between rounded-md bg-white/10 border shadow-lg'>
            {usuarios?.map(usuario => {
                return (
                    <div key={usuario.id} className='py-1 flex justify-between text-md'>

                        <h3 className='capitalize'>
                            {usuario.nombre} {usuario.apellidos}
                        </h3>

                        <button
                            onClick={() => handleClick(usuario.id)}
                            className='px-2 bg-red-600 hover:bg-red-700 rounded-md'>
                            <FaDeleteLeft className='self-center' />
                        </button>
                    </div>
                )
            })}
        </div>
        
    </section>
  )
}

export default ListaDocentes