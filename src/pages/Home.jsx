import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { hidde } from '../store/menuSlice.js'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
 
    dispatch(hidde());
  }, [])

  return (
    <main className='w-full'>

        <section className='w-full flex flex-col md:flex-row gap-2 justify-center bg-gradient-to-b from-black/40 to-black/0'>

            <img
                src="https://i.postimg.cc/3RyjKg2B/techback.png"
                className='w-full md:w-3/5 lg:w-2/5 md:m-auto pt-16 pb-10'
                alt="se-profesional" />

            <div className='w-full md:w-2/5 md:m-auto py-10 flex flex-col gap-4'>
                <h2 className='text-5xl text-center animate-fade-down animate-ease-linear'>
                umigkata juju <strong className='text-yellow-500'>nugkanum unuimamain awanunu</strong>
                </h2>

                <h2 className='text-3xl text-center'>
                    Preparate para un <strong className='text-yellow-500'>mundo de posibilidades</strong>
                </h2>
            </div>

        </section>

        <section className='w-full pt-10 pb-24 flex flex-col md:flex-row gap-4 justify-center'>

            <img
                src="https://i.postimg.cc/NMW6L54w/now.png"
                className='md:w-3/5 lg:w-2/5 md:m-auto'
                alt="se-profesional" />

            <div className='w-full md:w-2/5 md:m-auto flex flex-col gap-4'>
                <h2 className='text-3xl text-center'>
                    <strong>Agatmamjata</strong> yabai ame dekatkau <strong>wainkaumnunuig</strong>
                </h2>

                <Link to="/registrar" className='w-2/3 mx-auto p-3 rounded-md bg-red-600 hover:bg-red-700 text-xl'>
                    <button className='w-full text-center'>
                        Agatmamjata
                    </button>
                </Link>
                </div>

        </section>

        <section className='w-full p-6 flex flex-col md:flex-row gap-6 justify-center bg-gradient-to-b from-black/0 to-black/40'>

            <div className='w-full md:w-2/5 flex flex-col gap-4'>
                <h3 className='font-bold text-yellow-500 text-2xl '>
                    Yacha atag tabaujum
                </h3>

                <span className='border'></span>

                <p className='text-lg'>
                    Iman ame setakchau pegkeg unuimamu dekamame, ame dekapmamsam agkan pujusam unuimagta.
                </p>
            </div>

            <img
                src="https://i.postimg.cc/YSCfPc9T/se-profesional.png"
                className='w-full md:w-3/5 lg:w-2/5'
                alt="se-profesional" />

        </section>

        <section className='w-full px-6 pt-16 pb-32 flex flex-col md:flex-row gap-6 justify-center bg-gradient-to-t from-black/0 to-black/40'>

            <div className='w-full md:w-2/4 lg:w-2/5 flex flex-col gap-4'>
                <h3 className='flex gap-2 font-bold text-yellow-500 text-2xl'>
                    Ajutmamui ame egamu
                </h3>

                <span className='border'></span>

                <p className='text-lg'>
                    Unuimamu pegkeg takamu waji ashi unuimatjamu. Iman ata dekamu, dekamuahi inagnasam imananu TIC's tuwi jejagji nunu.
                </p>

                <ul className='text-sm'>
                    <li>• Microsoft Excel</li>
                    <li>• Power Bi</li>
                    <li>• Adobe Photoshop</li>
                    <li>• Java</li>
                    <li>• MySQL</li>
                    <li>• Corel Draw</li>
                    <li>• Microsoft Word</li>
                    <li>• Y mucho mas</li>
                </ul>

                <Link to="/cursos">
                    <button className='w-full mx-auto p-3 rounded-md bg-red-600 hover:bg-red-700 text-xl'>
                        Wainkame augtai aidau
                    </button>
                </Link>
            </div>

            <img
                src="https://i.postimg.cc/3wfC5L0N/tenemos.png"
                className='w-full md:w-2/4 lg:w-2/5 object-cover'
                alt="se-profesional" />

        </section>
    
    </main>
  )
}

export default Home