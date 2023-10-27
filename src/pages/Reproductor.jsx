import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { ImArrowLeft } from "react-icons/im";

const Reproductor = () => {
  const { link } = useParams();

  return (
    <main className='w-full h-screen bg-gradient-to-b from-black/0 to-black/40'>

        <article className='w-full p-6 flex flex-col gap-6 justify-center'>

          <Link
              to="/menu"
              className='w-[100px] p-2 flex justify-center rounded-md bg-white/10'>
            <ImArrowLeft />
          </Link>

            <iframe
                className='w-full h-[400px] md:h-screen'
                src={`https://www.youtube-nocookie.com/embed/${link}?&showinfo=0&modestbranding=1&controls=1&autoplay=1&playsinline=0&rel=0&enablejsapi=1&cc_load_policy=0&iv_load_policy=3`}
                frameBorder="0"
                title='Entorno Basico de Excel'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                allowFullScreen>
            </iframe>

        </article>

    </main>
  )
}

export default Reproductor