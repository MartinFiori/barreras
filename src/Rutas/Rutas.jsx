import React, { Suspense, lazy } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// Components
import Loader from '../Components/Loader/Loader'
import Login from '../Pages/Login/Login'

// Pages
const Bloqueo = lazy(() => import('../Pages/Bloqueo/Bloqueo'))
const Home = lazy(() => import('../Pages/Home/Home'))
const LayoutPrivada = lazy(() => import('../Layouts/LayoutPrivada'))

export default function Rutas() {
  return <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path='/' element={
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      }
      />
      <Route path='/' element={
        <Suspense fallback={<Loader />}>
          <LayoutPrivada />
        </Suspense>
      }>

        <Route path='/bloqueo' element={
          <Suspense fallback={<Loader />}>
            <Bloqueo />
          </Suspense>
        }
        />
      </Route>

    </Routes>
  </BrowserRouter>
}
