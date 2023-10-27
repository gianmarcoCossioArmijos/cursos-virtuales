import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store/configureSlice.js'

import BaseLayout from '../layouts/BaseLayout'
import Home from '../pages/Home'
import Cursos from '../pages/Cursos'
import Reproductor from '../pages/Reproductor'
import Registro from '../pages/Registro'
import PrivateLayout from '../layouts/PrivateLayout'
import Login from '../pages/Login'
import MisCursos from '../pages/MisCursos'
import RegistrarCompra from '../components/administrador-components/RegistrarCompra'
import NuevoCurso from '../components/administrador-components/NuevoCurso'
import PrecioCursos from '../components/administrador-components/PrecioCursos'
import NuevoAdministrador from '../components/administrador-components/NuevoAdministrador'
import ListaAdministradores from '../components/administrador-components/ListaAdministradores'
import ListaUsuarios from '../components/administrador-components/ListaUsuarios.jsx'
import ListaDocentes from '../components/administrador-components/ListaDocentes.jsx'
import CambiarClave from '../components/administrador-components/CambiarClave.jsx'

const Router = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
              <Routes>

                    <Route path='/' element={ <Home/> }/>
                    <Route path='/cursos' element={ <Cursos/> }/>
                    <Route path='/registrar' element={ <Registro/> }/>
                    <Route path='/login' element={ <Login/> }/>

                    <Route element={ <PrivateLayout/> }>

                      <Route path='/reproducir/:link' element={ <Reproductor/> }/>
                      <Route path='/menu' element={ <MisCursos/> }/>
                      <Route path='/registrar-compra' element={ <RegistrarCompra/> }/>
                      <Route path='/nuevo-libro' element={ <NuevoCurso/> }/>
                      <Route path='/lista-precios' element={ <PrecioCursos/> }/>
                      <Route path='/registrar-administrador' element={ <NuevoAdministrador/> }/>
                      <Route path='/lista-administradores' element={ <ListaAdministradores/> }/>
                      <Route path='/lista-usuarios' element={ <ListaUsuarios/> }/>
                      <Route path='/lista-docentes' element={ <ListaDocentes/> }/>
                      <Route path='/cambiar-clave' element={ <CambiarClave/> }/>

                    </Route>

              </Routes>
            </BaseLayout>
        </BrowserRouter>
        </Provider>
    </>
  )
}

export default Router