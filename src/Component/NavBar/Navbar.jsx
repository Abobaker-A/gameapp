import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ApiContext } from './../../Context/ApiContext';


export default function Navbar({logOut , userData}) {
  const {getHome ,setGameCategories , setgameSortBy ,setGameplatforms} = useContext(ApiContext)
  function setNull(term){
    term(null)
  }

  return <><nav className="navbar navbar-expand-lg navbar-dark shadow-lg">
  <div className="container">
    <Link className="navbar-brand me-5" to="/">
        
            <img className='LogoNav' src={require("./../../Imgs/logo.png")} alt="Logoo" />
            <span className='Logotitle'>Game Over</span> 
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData?<>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
      <li className="nav-item">
        <Link onClick={()=>getHome('popularity')} className="nav-link active" aria-current="page" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/all">All</Link>
      </li>
      <li className="nav-item dropdown">
        <div className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Platforms
        </div>
        <ul className="dropdown-menu">
          <li onClick={()=>setNull(setGameplatforms)}><Link   className="dropdown-item" to="/platforms/pc">PC</Link></li>
          <li onClick={()=>setNull(setGameplatforms)}><Link  className="dropdown-item" to="/platforms/browser">Browser</Link></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <div className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
        sort-by
        </div>
        <ul className="dropdown-menu">
          <li onClick={()=>setNull(setgameSortBy)}><Link  className="dropdown-item" to="/sortby/release-date">Release Date</Link></li>
          <li onClick={()=>setNull(setgameSortBy)}><Link  className="dropdown-item" to="/sortby/popularity">Popularity</Link></li>
          <li onClick={()=>setNull(setgameSortBy)}><Link  className="dropdown-item" to="/sortby/alphabetical">alphabetical</Link></li>
          <li onClick={()=>setNull(setgameSortBy)}><Link  className="dropdown-item" to="/sortby/relevance">Relevance</Link></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <div className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Categories
        </div>
        <ul className="dropdown-menu">
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/racing">Racing</Link></li>
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/sports">Sports</Link></li>
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/social">Social</Link></li>
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/shooter">Shooter</Link></li>
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/open-world">Open World</Link></li>
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/zombie">Zombie</Link></li>
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/fantasy">Fantasy</Link></li>
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/action-rpg">Action Rpg</Link></li>
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/action">Action</Link></li>
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/flight">Flight</Link></li>
          <li onClick={()=>setNull(setGameCategories)}><Link className="dropdown-item" to="/categories/battle-royale">Battle Royale</Link></li>
    
        </ul>
      </li>
     
    </ul>
      </>:""}
      
      {userData?<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <span onClick={logOut}  className="nav-link btn text-white btn-outline-primary " aria-current="page" >LogOut</span>
        </li>
      </ul>: <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/login">Login</Link>
      </li>
      
      <li className="nav-item mx-3">
        <Link className="nav-link btn text-white btn-outline-primary " aria-current="page" to="/register">Jion Free</Link>
      </li>
     
    </ul>}


      
     
      
    </div>
  </div>
</nav>
  
  
  
  </>
}
