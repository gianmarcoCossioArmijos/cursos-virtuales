import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu';

const BaseLayout = (props) => {

  return (
    <div className='w-full min-h-screen flex flex-col bg-blue-950 text-white'>

        <Header />

        <div className='w-full min-h-screen relative'>

          <Menu />
          {props.children}

        </div>

        <Footer />
    
    </div>
  )
}

export default BaseLayout