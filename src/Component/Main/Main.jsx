import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './../NavBar/Navbar';

export default function Main({logOut,userData}) {

  return <>
  <Navbar logOut={logOut} userData={userData} />

<Outlet/>



  </>
}
