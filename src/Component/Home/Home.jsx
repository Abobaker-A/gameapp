import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ApiContext } from './../../Context/ApiContext';
import LoadPage from './../LoadPage/LoadPage';
import { Helmet } from 'react-helmet';

export default function Home() {

const {game} = useContext(ApiContext)

return <>{game?<>
 <Helmet>
  <meta name="description" content={`Home Page`}/>
    <meta name="keywords" content="Games PC  Browser   "/>
    <title>Game Over Home Page</title>
  </Helmet>
 <div className="container-fluid bg-dark  content text-center py-5">
    <div >
    <h2 className='text-white-50 h1'>Find & track the best <span className='text-primary'>free-to-play</span> games!</h2>
    <p className='lead py-2'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
    <Link to={"/all"} className='btn btn-outline-secondary'>Browser Game</Link>
    </div>
    
  </div>
  <div className="container pb-3">
    <div className="row">
      <div className="col-12 pt-5">
      <h3><i className="fa-solid fa-robot"></i><span className='ps-2'>Personalized Recommendations</span> 
</h3>
      </div>
      
  {game?.slice(0,3).map((game , indx)=><div key={indx} className="col-md-4 py-5 homeGame ">
        <Link to={`/details/${game.id}`} className="item shadow-lg ">

        <div className="card bg-dark bg-opacity-75 " >
  <img src={game.thumbnail} className="card-img-top w-100" alt="..."/>
  <div className="card-body d-flex justify-content-between">
    <h5 className="card-title text-white-50">{game.title}</h5>
    <p className="btn btn-sm btn-primary">Free</p>
  </div>
    </div>
        </Link>
        
        
      </div>)}



    </div>
  </div>

</>:<LoadPage/>}
 
  
  
  
  
  </>
}
