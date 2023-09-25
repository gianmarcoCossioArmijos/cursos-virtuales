import React, { useState } from 'react'

import { useCursos } from '../../hooks/useCursos.js'
import { toast } from 'sonner';

const NuevoCurso = () => {
  const [ curso, setCurso ] = useState({
    curso: "",
    descripcion: "",
    docente:"",
    imagen:"",
    nivel:"",
    precio:"",
    seccion:"",
    url:"",
  });

  const {nuevoCurso } = useCursos()

  const handleChange = (event) => {

    const value = event.target.value;
    const name = event.target.name;
    setCurso({...curso, [name]: value})
  }

  const handleSubmit = async (event) => {

    event.preventDefault();
    const response = await nuevoCurso(curso);

    if (response === "true") {

        toast("Curso registrado exitosamente");
        setCurso({
            curso: "",
            descripcion: "",
            docente:"",
            imagen:"",
            nivel:"",
            precio:"",
            seccion:"",
            url:"",
          });
    }
  }

  return (
    <section className='w-full min-h-screen p-6 flex flex-col gap-4 bg-gradient-to-b from-black/0 to-black/40'>

        <h5 className='w-full md:w-2/3 lg:w-2/5 md:mx-auto text-xl'>Registrar Curso</h5>

        <form
            onSubmit={handleSubmit}
            className='w-full md:w-2/3 lg:w-2/5 md:mx-auto py-4 pb-20 flex flex-col gap-4'>

            <label className='flex flex-col gap-2'>
                Nombre del Curso
                <input
                    type="text"
                    name="curso"
                    value={curso.curso}
                    onChange={handleChange}
                    className='w-full p-2 rounded-md text-black'
                    placeholder='ej. Tablas dinamicas en Excel'
                    required/>
            </label>

            <label className='flex flex-col gap-2'>
                Descripcion del Curso
                <input
                    type="text"
                    name="descripcion"
                    value={curso.descripcion}
                    onChange={handleChange}
                    className='w-full p-2 rounded-md text-black'
                    placeholder='ej. Aprende sobre tablas...'
                    required/>
            </label>

            <label className='flex flex-col gap-2'>
                Docente del Curso
                <input
                    type="text"
                    name="docente"
                    value={curso.docente}
                    onChange={handleChange}
                    className='w-full p-2 rounded-md text-black'
                    placeholder='ej. Joel Dawai Udgkum'
                    required/>
            </label>

            <label className='flex flex-col gap-2'>
                Imagen del Curso
                <input
                    type="text"
                    name="imagen"
                    value={curso.imagen}
                    onChange={handleChange}
                    className='w-full p-2 rounded-md text-black'
                    placeholder='ej. http//repo/img/dchiw83eidk/213.jpg'
                    required/>
            </label>

            <label className='flex flex-col gap-2'>
                Nivel del Curso
                <input
                    type="text"
                    name="nivel"
                    value={curso.nivel}
                    onChange={handleChange}
                    className='w-full p-2 rounded-md text-black'
                    placeholder='ej. Intermedio'
                    required/>
            </label>

            <label className='flex flex-col gap-2'>
                Precio del Curso
                <input
                    type="text"
                    name="precio"
                    value={curso.precio}
                    onChange={handleChange}
                    className='w-full p-2 rounded-md text-black'
                    placeholder='ej. S/.30.99'
                    required/>
            </label>

            <label className='flex flex-col gap-2'>
                Seccion del Curso
                <input
                    type="text"
                    name="seccion"
                    value={curso.seccion}
                    onChange={handleChange}
                    className='w-full p-2 rounded-md text-black'
                    placeholder='ej. Produccion Audiovisual'
                    required/>
            </label>

            <label className='flex flex-col gap-2'>
                URL del Curso
                <input
                    type="text"
                    name="url"
                    value={curso.url}
                    onChange={handleChange}
                    className='w-full p-2 rounded-md text-black'
                    placeholder='ej. Axt6MpWa4'
                    required/>
            </label>

            <input
                type="submit"
                value="Registrar curso"
                className='w-full h-fit my-4 p-3 flex justify-center gap-2 self-center rounded-md bg-yellow-600 hover:bg-yellow-500 font-bold'
                />

        </form>
    </section>
  )
}

export default NuevoCurso