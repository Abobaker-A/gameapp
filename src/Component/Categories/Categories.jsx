import Game from './../Game/Game';
import { useContext, useRef, useState } from 'react';
import { ApiContext } from '../../Context/ApiContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import LoadPage from '../LoadPage/LoadPage';
import { Helmet } from 'react-helmet';

export default function Categories() {
  const {x} =  useParams()
  const {gameCategories ,getGameCategories } = useContext(ApiContext); 
  const more = useRef();
  const [pages, setPages] = useState(20)

  function seeMore(){
    if(gameCategories.length<20||gameCategories.length<pages){
      more.current.classList.add('d-none')
    }else{
      more.current.classList.remove('d-none')
      setPages(pages+20)
    }
  }

  
  useEffect(() => {
    getGameCategories(x)
  }, [getGameCategories, x])
  

  return <>
  {gameCategories ?<>
    <Helmet>
  <meta name="description" content={`${x} games`}/>
    <meta name="keywords" content="Games PC  Browser   "/>
    <title>{x} Games</title>
  </Helmet>
    <div className="container py-5">
    <div className="row gy-4">
      {gameCategories?.slice(0,pages).map((game , idx )=><Game gameInfo={game} key={idx}/>)}
      
    </div>
  </div>
  <div className=' text-center pb-5'>
  <button ref={more} onClick={seeMore} className='btn btn-outline-primary'>See More</button>
</div></> :<LoadPage/>}
    
  
  </>
}
