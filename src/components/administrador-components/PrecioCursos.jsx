import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { useCursos } from '../../hooks/useCursos.js'

import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from 'sonner';
import { ImArrowLeft } from "react-icons/im";

const PrecioCursos = () => {
  const [ cursos, setCursos ] = useState([]);

  const { reportarCursos } = useCursos();
  const { eliminarCurso } = useCursos();


  useEffect(() => {

    reportarCursos()
      .then(cursos => setCursos(cursos));
  }, [])

  const handleClick = async (id) => {

    const response = await eliminarCurso(id);

    if (response === "true") {

        toast("Curso eliminado exitosamente");
        reportarCursos()
            .then(cursos => setCursos(cursos));
    }
  }
    
  return (
    <section className='w-full min-h-screen px-6 pt-6 pb-20 flex flex-col gap-4 bg-gradient-to-b from-black/0 to-black/40'>

        <Link
            to="/menu"
            className='w-[100px] p-2 flex justify-center rounded-md bg-white/10'>
          <ImArrowLeft />
        </Link>
        
        <h5 className='w-full md:w-2/3 lg:w-3/5 md:mx-auto text-xl'>Precios por Curso</h5>

        <div className='w-full md:w-2/3 lg:w-3/5 md:mx-auto p-3 flex flex-col justify-between rounded-md bg-white/10 border shadow-lg'>
            {cursos?.map(curso => {
                return (
                    <div key={curso.id} className='py-1 flex justify-between text-md'>

                            <h3 className='w-4/6'>{curso.curso}</h3>

                            <span className='w-1/6 text-end font-bold'>{curso.precio}</span>

                            <button
                            onClick={() => handleClick(curso.id)}
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

export default PrecioCursos