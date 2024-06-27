import React from 'react'
import { Outlet } from 'react-router-dom'

// Components
import Navbar from '../Components/Navbar/Navbar'

export default function LayoutPrivada() {
  // const location = useLocation()
  // if (true) return <Navigate to='/login' state={{ from: location }} replace />
  return (
    <main>
      <Navbar />
      <div className='container d-flex flex-column w-100'>
        <Outlet />
      </div>
    </main>
  )
}
