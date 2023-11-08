import { getDocs, deleteDoc, where, updateDoc, addDoc, doc, collection, query } from 'firebase/firestore'
import { db } from '../services/firebase'

import { useDispatch } from "react-redux"
import { login, logout } from '../store/authSlice'

export const useUsuarios = () => {

    const reference = collection(db, "usuarios");
    const dispatch = useDispatch();

    const crearUsuario = async(usuario) => {

        try {

            const q = query(reference, where("dni", "==", usuario.dni));
            const data = await getDocs(q);
            const results = [];

            data.forEach(doc => {
                
                results.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            if(JSON.stringify(results) === "[]") {

                await addDoc(reference, usuario);
                return "true";
            } else {

                return "false";
            }
        } catch (error) {

            console.log(error);
        }
    }

    const reportarUsuarios = async() => {

        try {
            
            const q = query(reference);
            const data = await getDocs(q);
            const results = []

            data.forEach(doc => {
                
                results.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            return results;
        } catch (error) {

            console.log(error);
        }
    }

    const eliminarUsuario = async(id) => {

        try {
            
            await deleteDoc(doc(reference, id));
            return "true";
        } catch (error) {

            console.log(error);
        }
    }

    const verificarUsuario = async(dni) => {

        try {
            
            const q = query(reference, where("dni", "==", dni));
            const data = await getDocs(q);
            const results = [];

            data.forEach(doc => {
                
                results.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            results.map(user => {

                if (user.dni === dni) {

                    dispatch(login({auth: user.sesion, rol: user.rol}));
                    return user.sesion;
                }
            });
        } catch (error) {

            console.log(error);
        }
    }

    const iniciarSesion = async(dni) => {

        try {
            
            const q = query(reference, where("dni", "==", dni));
            const data = await getDocs(q);
            const results = [];

            data.forEach(doc => {
                
                results.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            if (JSON.stringify(results) !== "[]") {
          
                return results;
            } else {

                return "error";
            }
        } catch (error) {

            console.log(error);
        }
    }

    const cerrarSesion = async() => {
         
        try {
            
            const ref = doc(reference, localStorage.getItem('id'));
            await updateDoc(ref, {sesion: crypto.randomUUID()});

            localStorage.setItem('auth', JSON.stringify(false));
            localStorage.setItem('rol', JSON.stringify(false));
            localStorage.removeItem('dni');
            localStorage.removeItem('id');

            dispatch(logout());

            return true;
        } catch (error) {

            console.log(error);
        }
    }

    const buscarUsuario = async(dni) => {

        try {
            
            const q = query(reference, where("dni", "==", dni));
            const data = await getDocs(q);
            const results = [];

            data.forEach(doc => {
                
                results.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            return results;
        } catch (error) {
            
            console.log(error);
        }
    }

    const registrarCompra = async(id, cursos) => {
         
        try {
            
            const ref = doc(reference, id);
            await updateDoc(ref, {cursos : cursos});

            return "true";
        } catch (error) {

            console.log(error);
        }
    }

    const cambiarClave = async(id) => {
         
        try {
            
            const ref = doc(reference, id);
            const nuevaClave = crypto.randomUUID()
            await updateDoc(ref, {clave : nuevaClave});

            return nuevaClave;
        } catch (error) {

            console.log(error);
        }
    }

    const nuevaClave = async(id, clave) => {
         
        try {
            
            const ref = doc(reference, id);
            await updateDoc(ref, {clave : clave});

            return clave;
        } catch (error) {

            console.log(error);
        }
    }

    return {
        crearUsuario,
        iniciarSesion,
        cerrarSesion,
        verificarUsuario,
        buscarUsuario,
        reportarUsuarios,
        eliminarUsuario,
        registrarCompra,
        cambiarClave,
        nuevaClave
    }
}