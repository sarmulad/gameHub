import React, { useEffect, useState }  from 'react'
import apiClient from '../services/api-client'

interface Games{
   id:number;
   name:string
}

interface FetchProps {
   count: number;
   results:Games[]
}

function GameGrid() {
   const [games, setGames] =  useState<Games[]>([])
   const [error, setError] =  useState("")

   useEffect(()=>{
      apiClient.get<FetchProps>('/games')
       .then((res) => setGames(res.data.results))
       .catch((err)=> setError(err.message))
   }, [])

  return (
    <div>
        <ul>
            {games.map(game=>(
              <li key={game.id}>{game.name} </li>
            ))}
        </ul>
    </div>
  )
}

export default GameGrid