import React, { useState } from 'react'

import { toast } from 'sonner';
import { useUsuarios } from '../../hooks/useUsuarios.js'
import { useNavigate } from 'react-router-dom';

const NuevoAdministrador = () => {
    const [ usuario, setUsuario ] = useState({
        nombre: "",
        apellidos: "",
        dni: "",
        clave: "",
        nacimiento: "",
        email: "",
        rol: "administrador",
        sesion: crypto.randomUUID(),
        cursos:
            {
                "Entorno básico de Excel" : "NI6kjI1pLIk"
            }
    });

    const { crearUsuario } = useUsuarios();
    const navigate = useNavigate();

    const handleChange = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        setUsuario({...usuario, [name]: value})
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        const response = await crearUsuario(usuario);
        
        if (response === "false") {
    
            toast.error("El usuario ya existe");
            setUsuario({
                nombre: "",
                apellidos: "",
                dni: "",
                clave: "",
                nacimiento: "",
                email: "",
                rol: "administrador",
                sesion: crypto.randomUUID(),
                cursos:
                    {
                        "Entorno básico de Excel" : "NI6kjI1pLIk"
                    },
            })
        } else {
    
            setUsuario({
                nombre: "",
                apellidos: "",
                dni: "",
                clave: "",
                nacimiento: "",
                email: "",
                rol: "administrador",
                sesion: crypto.randomUUID(),
                cursos:
                    {
                        "Entorno básico de Excel" : "NI6kjI1pLIk"
                    }
            })
            
            navigate("/menu");
            toast("Administrador registrado exitosamente");
        }
    }

  return (
    <div className='w-full min-h-screen p-6 flex flex-col gap-4 bg-gradient-to-b from-black/0 to-black/40'>

        <h5 className='w-full md:w-2/3 lg:w-2/5 md:mx-auto text-xl'>Registrar Curso</h5>

        <form
            onSubmit={handleSubmit}
            className='w-full md:w-2/3 lg:w-2/5 md:mx-auto pb-20 flex flex-col gap-4 justify-center'>

            <label className='flex flex-col gap-1'>
                Nombres
                <input
                    type="text"
                    name="nombre"
                    value={usuario?.nombre}
                    onChange={handleChange}
                    className='p-2 rounded-md text-black'
                    placeholder='Ingresa tu nombre'
                    required/>
            </label>

            <label className='flex flex-col gap-1'>
                Apellidos
                <input
                    type="text"
                    name="apellidos"
                    value={usuario?.apellidos}
                    onChange={handleChange}
                    className='p-2 rounded-md text-black'
                    placeholder='Ingresa tu apellido'
                    required/>
            </label>

            <label className='flex flex-col gap-1'>
                DNI
                <input
                    type="text"
                    name="dni"
                    value={usuario?.dni}
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
                    value={usuario?.clave}
                    onChange={handleChange}
                    className='p-2 rounded-md text-black'
                    placeholder='Ingresa tu contraseña'
                    required/>
            </label>

            <label className='flex flex-col gap-1'>
                Fecha de Nacimiento
                <input
                    type="date"
                    name="nacimiento"
                    value={usuario?.nacimiento}
                    onChange={handleChange}
                    className='p-2 rounded-md text-black'
                    placeholder='Ingresa tu correo electronico'
                    required/>
            </label>

            <label className='flex flex-col gap-1'>
                Correo Electronico
                <input
                    type="text"
                    name="email"
                    value={usuario?.email}
                    onChange={handleChange}
                    className='p-2 rounded-md text-black'
                    placeholder='Ingresa tu correo electronico'
                    required/>
            </label>

            <input
                type="submit"
                value="Registrar"
                className='w-full h-fit mx-auto my-6 p-3 flex justify-center gap-2 rounded-md bg-yellow-600 hover:bg-yellow-500 font-bold'
                />

        </form>

    </div>
  )
}

export default NuevoAdministrador