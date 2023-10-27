import React, { useEffect, useState } from 'react'

import { useDispatch } from "react-redux"
import { hidde } from '../store/menuSlice.js'

import { useCursos } from '../hooks/useCursos.js'
import { FaShoppingCart } from "react-icons/fa";

const Cursos = () => {
  const [ cursos, setCursos ] = useState([]);
  const [ buscar, setBuscar ] = useState("");
  const [ list, setList ] = useState([]);

  const { reportarCursos } = useCursos();
  const dispatch = useDispatch();

  useEffect(() => {

    reportarCursos()
      .then(cursos => {
        setCursos(cursos);
        setList(cursos);
      });

    dispatch(hidde());
  }, [])

  const handleClick = (curso) => {

    const number = "51 910 020 072";
    const mensaje = encodeURIComponent(`¡Hola!👋 estoy estoy interesado, en el curso 👉 ${curso}`);
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${mensaje}`;
    window.open(url, "_blank");
  }

  const handleChange = (event) => {

    if (event.target.value === "") {

        setList(cursos);
    }
    
    const value = event.target.value.toLowerCase();
    setBuscar(value);
    const newList = cursos.filter((curso) => curso.curso.toLowerCase().includes(buscar) === true);
    setList(newList);
  }

  return (
    <main className='w-full min-h-screen bg-gradient-to-b from-black/0 to-black/40'>

        <article className='w-full p-6 flex flex-col md:flex-row gap-6 justify-center flex-wrap'>

            <input
                type="text"
                name="buscar"
                value={buscar}
                placeholder='Buscar cursos por nombre...'
                onChange={handleChange}
                className='w-full p-3 rounded-md shadow-md text-black'/>

            {list.map(curso => {
                return (
                    <div
                        key={curso.id}
                        className='w-full md:w-[320px] lg:w-[300px] rounded-t-md shadow-lg'
                    >
                        <img
                            className='w-full h-[250px] object-cover rounded-t-md'
                            src={curso.imagen}
                            alt="cover" />
                        
                        <div className='w-full p-2 bg-white/5 rounded-b-md'>

                            <h3 className='text-lg font-bold text-yellow-500'>{curso.curso}</h3>
                            
                            <div className='flex justify-between'>
                                <span className='py-1 text-md'>{curso.docente}</span>
                                <span className='p-1 text-sm border rounded-md'>{curso.nivel}</span>
                            </div>

                            <span className='font-bold text-sm'>{curso.precio}</span>

                            <p className='py-2 text-sm text-slate-400'>
                                {curso.descripcion}
                            </p>

                            <button
                                onClick={() => handleClick(curso.curso)}
                                className='w-full mx-auto p-2 flex justify-center gap-2 rounded-md bg-yellow-600 hover:bg-yellow-500'>
                                <FaShoppingCart className='self-center'/>
                                Comprar
                            </button>

                        </div>
                    </div>
                )
            })}

        </article>

    </main>
  )
}

export default Cursos