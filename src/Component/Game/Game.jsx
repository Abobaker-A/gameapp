import React from 'react'
import { Link } from 'react-router-dom';
import LoadPage from './../LoadPage/LoadPage';

export default function Game({gameInfo}) {
  
  return <>{gameInfo?
    <Link to={`/details/${gameInfo.id}`} className="col-md-3 text-white-50 cursorPointer">
        <div className="game shadow-lg">
        <div className="card bg-dark bg-opacity-75" >
    <img src={gameInfo.thumbnail} className="card-img-top" alt="..."/>
    <div className="card-body ">
      <div className="d-flex justify-content-between">
      <h5 className="card-title">{gameInfo.title}</h5>
      <p  className="btn btn-sm btn-primary">Free</p>
      </div>
      <p>{gameInfo.short_description.split(" ").splice(0,3).join(' ')+"..."}</p>
    <div className='d-flex text-black-50  justify-content-between'>
    <i className="fa-solid bg-secondary p-1 rounded-2 fa-plus"></i>
    <h6 className=" m-0 "> <span className='bg-secondary p-0 px-3 m-0 rounded-4'>{gameInfo.genre}</span>{gameInfo.platform === "PC (Windows)"?<i className="fa-brands fa-windows text-secondary"></i>:<i className="fa-brands text-secondary fa-chrome"></i>}   </h6>
  </div>
    </div>
    
  </div>
  
        </div>
      </Link> 
      :<LoadPage/>}
  
  
  
  </>
}
