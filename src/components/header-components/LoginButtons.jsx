import React from 'react'
import { Link } from 'react-router-dom'

const LoginButtons = () => {
  return (
    <>
        <Link
            to="/login"
            className='my-auto'>
            <button className='h-fit px-2 py-3 self-center bg-yellow-600 hover:bg-yellow-500 rounded-md text-sm'>
                Wayata
            </button>
        </Link>

        <Link
            to="/registrar"
            className='my-auto'>
            <button className='h-fit px-2 py-3 self-center bg-white/10 hover:bg-white/20 rounded-md text-sm'>
                Agatmamjata
            </button>
        </Link>
    </>
  )
}

export default LoginButtons