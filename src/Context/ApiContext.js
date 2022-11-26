import axios from "axios";
import { createContext, useEffect, useState } from "react"


export const ApiContext = createContext()





  
export default function ApiContextF({children}) {
 
    const [gameInfo, setGameInfo] = useState(null)
    const [gameAll, setGameAll] = useState(null)
    const [gameSortBy, setgameSortBy] = useState(null)
    const [gameCategories, setGameCategories] = useState(null)
    const [gamePlatforms, setGameplatforms] = useState(null)




    async function getGameplatforms( categBy ){
        let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
          headers: {'X-RapidAPI-Key': 
          '743c4b2660mshb1c7ce683d56fe7p133ae9jsnb944149e9185',
           'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
           params: { "platform" : categBy }
        })

        if(data){
            setGameplatforms(data)

        }

      }

    async function getGameCategories( categBy ){

        let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
          headers: {'X-RapidAPI-Key': 
          '743c4b2660mshb1c7ce683d56fe7p133ae9jsnb944149e9185',
           'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
           params: { "category" : categBy }
        })

        if(data){
            setGameCategories(data)

        }

      }


async function getGamesortBy( categBy ){

  let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
    headers: {'X-RapidAPI-Key': 
    '743c4b2660mshb1c7ce683d56fe7p133ae9jsnb944149e9185',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
     params: { "sort-by" : categBy }
  })

  if(data){    
    setgameSortBy(data)
  }

}



    async function getAllGames(){

        let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
          headers: {'X-RapidAPI-Key': 
          '743c4b2660mshb1c7ce683d56fe7p133ae9jsnb944149e9185',
           'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
        })

        if(data){
            setGameAll(data)
        }
      }



    async function getHome( categBy ){


        let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
          headers: {'X-RapidAPI-Key': 
          '743c4b2660mshb1c7ce683d56fe7p133ae9jsnb944149e9185',
           'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
           params: { "sort-by" : categBy }
        })

        if(data){
            setGameInfo(data)
        }
      }
      

useEffect(() => {
  
    getHome('popularity');
    getAllGames()
 
}, [])


  return <>
  
  <ApiContext.Provider value={ {game : gameInfo ,
   getAllGames ,
    gameAll  ,
    getHome ,
    getGamesortBy,
    gameSortBy,
  gameCategories,
  getGameCategories,
  getGameplatforms,
  gamePlatforms,
  setGameCategories,
  setGameplatforms,
  setgameSortBy,



  
  }}>
  {children}
  </ApiContext.Provider>
  
  
  </>
}
