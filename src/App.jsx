import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Categories from './Component/Categories/Categories';
import Details from './Component/Details/Details';
import Game from './Component/Game/Game';
import Login from './Component/Login/Login';
import Platforms from './Component/Platforms/Platforms';
import SortBy from './Component/SortBy/SortBy';
import Register from './Component/Register/Register';
import All from './Component/All/All';
import jwtDecode from 'jwt-decode';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import { Offline } from 'react-detect-offline';


export default function App() {
  const [userData, setUserData] = useState(null) 
  function saveUserData(){
    let enCode = localStorage.getItem('userToken');
    let deCode = jwtDecode(enCode);
    setUserData(deCode)
  }
  useEffect(() => {
    if(localStorage.getItem('userToken')!==null){
      saveUserData()
    }
  }, [])
  
  function logOut(){
    localStorage.removeItem('userToken');
    setUserData(null)
  }
  

 const router = createBrowserRouter([
  {path:"",element:<Main logOut={logOut}  userData={userData} /> , children:[
    {path:"",element:<ProtectedRoute userData={userData} saveUserData={saveUserData}><Home/></ProtectedRoute>  },
    {path:"home",element:<ProtectedRoute userData={userData} saveUserData={saveUserData}><Home/></ProtectedRoute>},
    {path:"gameapp",element:<ProtectedRoute userData={userData} saveUserData={saveUserData}><Home/></ProtectedRoute>},
    {path:"all",element:<ProtectedRoute userData={userData} saveUserData={saveUserData}><All/></ProtectedRoute>},
    {path:"categories/:x",element:<ProtectedRoute userData={userData} saveUserData={saveUserData}><Categories/></ProtectedRoute>},
    {path:"details/:id",element:<ProtectedRoute userData={userData} saveUserData={saveUserData}><Details/></ProtectedRoute>},
    {path:"game",element:<ProtectedRoute userData={userData} saveUserData={saveUserData}><Game/></ProtectedRoute>},
    {path:"login",element:<Login saveUserData={saveUserData} />},
    {path:"platforms/:x",element:<ProtectedRoute userData={userData} saveUserData={saveUserData}><Platforms/></ProtectedRoute>},
    {path:"sortby/:x",element:<ProtectedRoute userData={userData} saveUserData={saveUserData}><SortBy/></ProtectedRoute>},
    {path:"register",element:<Register/>},
    {path:"*",element:<ErrorPage/>},
  ]}
 ])
  return <>
   <Offline>
      <div className="position-fixed bottom-0 end-0 m-5 shadow-lg bg-light  p-4 rounded-4 OfflineLabel text-secondary  text-uppercase text-center"><h4>no internet connection</h4> <h6>You Are Offline</h6> </div>
    </Offline>
  <RouterProvider router={router}/>
  </>
}
