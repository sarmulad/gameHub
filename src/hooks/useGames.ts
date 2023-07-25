import  { useEffect, useState,  }  from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios';
import { Genres } from './useGenres';

export interface Platform{
    id:number;
    name: string;
    slug:string;
}

export interface Games{
    id:number;
    name:string
    background_image:string;
    parent_platforms: {platform:Platform}[];
    metacritic:number;
 }
 
 interface FetchProps {
    count: number;
    results:Games[]
 }

 const useGames = (selectedGenre: Genres | null, selectedPlatform: Platform | null, selectedSort: string ) =>{
    const [games, setGames] =  useState<Games[]>([])
    const [error, setError] =  useState("")
    const [isLoading, setIsloading] =  useState(false)
    const genreAndPlatformIds = (selectedGenre || selectedPlatform || selectedSort) ? [selectedGenre?.id, selectedPlatform?.id , selectedSort] : [];

   useEffect(()=>{
    const controller = new AbortController();
      setIsloading(true)
      apiClient.get<FetchProps>('/games', 
        {signal:controller.signal, 
         params:{
         genres: selectedGenre?.id, 
         platforms: selectedPlatform?.id, 
         ordering: selectedSort,         
        }})
       .then((res) => {
           setGames(res.data.results)
           setIsloading(false)
         })
       .catch((err)=>{ 
          if(err instanceof CanceledError) return;
          setError(err.message)
          setIsloading(false)
          
        })
       
       return () => controller.abort()
   }, genreAndPlatformIds )

    return{games, error, isLoading}
}

export default useGames;