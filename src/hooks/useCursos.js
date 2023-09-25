import { addDoc, getDocs, getDoc, deleteDoc, doc, collection, query } from 'firebase/firestore'
import { db } from '../services/firebase'

export const useCursos = () => {

    const reference = collection(db, "cursos");

    const nuevoCurso = async(curso) => {

        try {
            
            await addDoc(reference, curso);
            return "true";
        } catch (error) {
            
            console.log(error);
        }
    }

    const reportarCursos = async() => {

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
            return error;
        }
    }

    const eliminarCurso = async(id) => {

        try {
            
            await deleteDoc(doc(reference, id));
            return "true";
        } catch (error) {

            console.log(error);
            return error;
        }
    }

    const cursosUsuario = async() => {

        try {
            
            const id = localStorage.getItem("id");
            const ref = doc(db, "usuarios", id)

            const data = await getDoc(ref);
            const result = {
                id: data.id,
                ...data.data()
            }
            
            return result;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    return {
        reportarCursos,
        cursosUsuario,
        eliminarCurso,
        nuevoCurso
    }
}