import React, { useRef } from 'react'
import { useContext, useEffect } from 'react';
import { ApiContext } from './../../Context/ApiContext';
import Game from './../Game/Game';
import LoadPage from './../LoadPage/LoadPage';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function All() { 
  const {gameAll} = useContext(ApiContext);
  const more = useRef();
  const [pages, setPages] = useState(20)

  function seeMore(){
    if(gameAll.length<20||gameAll.length<pages){
      more.current.classList.add('d-none')
    }else{
      more.current.classList.remove('d-none')
      setPages(pages+20)
    }
  }

  
  return<>{gameAll? <>
    <Helmet>
  <meta name="description" content="All Games Page"/>
    <meta name="keywords" content="Games PC  Browser   "/>
    <title>All Games</title>
  </Helmet>
  <div className="container py-5">
  <div className="row gy-4">
    {gameAll?.slice(0,pages).map((game , idx )=><Game gameInfo={game} key={idx}/>)}
    
  </div>
</div>
<div className=' text-center pb-5'>
  <button ref={more} onClick={seeMore} className='btn btn-outline-primary'>See More</button>
</div>
  </> 

:<LoadPage/>}
 
  
  
  </>
}
