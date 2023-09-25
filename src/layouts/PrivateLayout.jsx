import React, { useEffect, useState } from 'react'

import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector  } from "react-redux"

const PrivateLayout = () => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('auth') || "false");
  
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {

    if (isAuth === "false") {
        navigate("/login");
    }
  }, [])

  useEffect(() => {

    const auth = localStorage.getItem('auth') || "false";

    if (auth === "false") {
      navigate("/");
    }
  }, [auth])

  return (
    <div className='w-full min-h-screen'>

      <Outlet/>
    
    </div>
  )
}

export default PrivateLayout