import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import  axios  from 'axios';
import { useEffect } from 'react';
import LoadPage from './../LoadPage/LoadPage';
import { Helmet } from 'react-helmet';

export default function Details() {
  const {id} = useParams();
  console.log(id);
  const [gameDetails, setGameDetails] = useState(null)

  async function getGamesortBy( categ ){

    let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`,{
      headers: {'X-RapidAPI-Key': 
      '743c4b2660mshb1c7ce683d56fe7p133ae9jsnb944149e9185',
       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
       params: { "id" : categ }
    })

    if(data){
      setGameDetails(data)
      console.log(data);
    }
  }
  useEffect(() => {
    getGamesortBy(id)

  }, [id])
  
  return <>{gameDetails?<>
   <Helmet>
  <meta name="description" content={`${gameDetails.title} Game`}/>
    <meta name="keywords" content="Games PC  Browser   "/>
    <title>{gameDetails.title} Game</title>
  </Helmet>
  <div className="container text-white-50 py-5">
  <div className="row">
    <div className="col-md-4">
      <figure>
        <img src={gameDetails.thumbnail} alt="Game" className='w-100 rounded-3' />
        <div className='d-flex justify-content-between p-2'>
        <a target={'_blank'} href={gameDetails.game_url} className='btn btn-secondary  ' rel="noreferrer">Free</a>
          <a target={'_blank'} href={gameDetails.freetogame_profile_url} className='btn btn-primary  text-white px-5 w-75' rel="noreferrer">Play Now <i className="fa-solid fa-right-from-bracket"></i></a>
        </div>

      </figure>
    </div>
    <div className="col-md-8">
      <h2 className='h1' >{gameDetails.title}</h2>
      <h4>About {gameDetails.title}</h4>
    <p className='fw-semibold'>{gameDetails.description}</p>
    {gameDetails.minimum_system_requirements? <><h4>Minimum System Requirements</h4>
    <p> <span className='fw-bolder'>Graphics :</span> {gameDetails.minimum_system_requirements?.graphics}</p>
    <p> <span className='fw-bolder'>Memory :</span> {gameDetails.minimum_system_requirements?.memory}</p>
    <p> <span className='fw-bolder'>Os  :</span>  {gameDetails.minimum_system_requirements?.os}</p>
    <p> <span className='fw-bolder'>Processor :</span>  {gameDetails.minimum_system_requirements?.processor}</p>
    <p> <span className='fw-bolder'>Storage  :</span>  {gameDetails.minimum_system_requirements?.storage}</p>
    </>:""}

    {gameDetails.screenshots.length!==0?<>
      <h4>{gameDetails.title} Screenshots</h4>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={gameDetails.screenshots[0]?.image} className="d-block w-100" alt="GaneLogo"/>
  </div>
  {gameDetails.screenshots?.slice(1).map((screen , indx)=> <div key={indx} className="carousel-item">
    <img src={screen?.image} className="d-block w-100" alt="GaneLogo"/>
  </div>
  )}
</div>
<button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>

</div>

    </>:""}
    
    

    <h3>Additional Information</h3>
      <div className="row py-4">
      <div className="col-md-4">
          <div className=''>
            <p className='text-white-50 m-0'>Title</p>
            <p className='text-white '>{gameDetails.title}</p>
          </div>
          <div>
            <p className='text-white-50'>Release Date</p>
            <p className='text-white'>{gameDetails.release_date}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className=''>
            <p className='text-white-50 m-0'>Developer</p>
            <p className='text-white '>{gameDetails.developer}</p>
          </div>
          <div className=''>
            <p className='text-white-50 m-0'>Genre</p>
            <p className='text-white '>{gameDetails.genre}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className=''>
            <p className='text-white-50 m-0'>Publisher</p>
            <p className='text-white '>{gameDetails.publisher}</p>
          </div>
          <div className=''>
            <p className='text-white-50 m-0'>Platform</p>
            <p className='text-white '>{gameDetails.platform}{gameDetails.platform==="Windows"?<i className="fa-brands ms-2 fa-windows text-secondary"></i>:<i className="fa-brands ms-2 text-secondary fa-chrome"></i>}</p>
          </div>
        </div>



      </div>

</div>
          
          
    </div>
  </div>
  </> 
  :<LoadPage/>}
  
  
  
  
  
  
  
  </>
}
