import React, { useEffect, useState } from 'react'

import { useCursos } from '../hooks/useCursos.js'
import { Link } from 'react-router-dom';

import { BsPlayBtnFill } from "react-icons/bs";
import MenuAdministracion from '../components/administrador-components/MenuAdministracion.jsx';
import MenuDocente from '../components/administrador-components/MenuDocente.jsx';

const MisCursos = () => {
    const [ cursos, setCursos ] = useState([]);
    const [ rol, setRol ] = useState("usuario"); 
    
    const { cursosUsuario } = useCursos();
    useEffect(() => {

        const rolUsuario = localStorage.getItem("rol");

        if (rol !== "false") {

            setRol(rolUsuario);
        }

        cursosUsuario()
          .then(cursos => setCursos(cursos.cursos));

    }, [])

  return (
    <div className='w-full min-h-screen p-6 flex flex-col gap-6 bg-gradient-to-b from-black/0 to-black/40'>

        {rol === "administrador" ? <MenuAdministracion /> : ""}

        {rol === "docente" ? <MenuDocente /> : ""}

        <article className='w-full md:w-2/3 lg:w-3/5 md:mx-auto flex flex-col gap-6 justify-center'>

            <h3 className='text-xl'>Mis cursos</h3>

            {Object.keys(cursos).map((key) => {
                return (
                    <div
                        key={cursos[key]}
                        className='w-full p-3 flex justify-between gap-2 rounded-md bg-white/10 border shadow-lg'>

                        <h3 className='text-2xl'>{key}</h3>

                        <Link
                            className='py-2 px-3 flex justify-center gap-2 rounded-md bg-yellow-600 hover:bg-yellow-500'
                            to={`/reproducir/${cursos[key]}`}>

                            <BsPlayBtnFill className='self-center'/>

                        </Link>

                    </div>
                )
            }) || ""}

        </article>
    
    </div>
  )
}

export default MisCursos