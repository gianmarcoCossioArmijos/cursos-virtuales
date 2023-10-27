import React, { useEffect, useState } from 'react'

import { useCursos } from '../../hooks/useCursos'
import { useUsuarios } from '../../hooks/useUsuarios.js'
import { Link } from 'react-router-dom';

import { ImArrowLeft } from "react-icons/im";
import { toast } from 'sonner';

const RegistrarCompra = () => {
  const [ dni, setDni ] = useState("");
  const [ usuario, setUsuario ] = useState({})
  const [ opciones, setOpciones ] = useState([]);
  const [ url, setUrl ] = useState("");

  const { reportarCursos } = useCursos();
  const {buscarUsuario } = useUsuarios();
  const {registrarCompra } = useUsuarios();

  useEffect(() => {

    reportarCursos()
      .then(cursos => setOpciones(cursos));
  }, [])

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

  const handleSubmitRegistro = async (event) => {

    event.preventDefault();

    if (url === "null" || url === "") {

        toast.error("Debes seleccionar un curso");
    } else {
        
        const lista = url.split(",");
        const name = lista[0];
        
        const nuevosCursos = {
            ...usuario.cursos,
            [name] : lista[1]
        };
    
        const response = await registrarCompra(usuario.id, nuevosCursos);
    
        if (response === "true") {
    
            toast("Compra registrada exitosamente");
        } else {
            toast.error("Error al registrar compra");
        }
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

        <h5 className='w-full md:w-2/3 lg:w-2/5 md:mx-auto text-xl'>Registrar curso</h5>

        <form
            onSubmit={handleSubmitRegistro}
            className='w-full md:w-2/3 lg:w-2/5 md:mx-auto pt-4 pb-20 flex flex-col gap-6 justify-between'>

            <select
                name="url"
                className='w-full p-3 rounded-md text-black'
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                required>

                <option
                    value="null">
                    Seleccionar Curso
                </option>

                {opciones.map(curso => {
                    return (
                        <option
                            key={curso.url}
                            value={`${curso.curso},${curso.url}`}>
                            {curso.curso}
                        </option>
                    )
                })}
            </select>

            <input
                type="submit"
                value="Registrar Compra"
                className='w-full h-fit p-3 flex justify-center gap-2 self-center rounded-md bg-yellow-600 hover:bg-yellow-500 font-bold'
                />

        </form>

    </section>
  )
}

export default RegistrarCompra