import React from 'react'
import Register from './component/register/Register'
import Login from './component/login/Login'
import { Route, Routes } from 'react-router-dom'
import Error from './component/error/Error'
import Home from './component/home-page/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  )
}
