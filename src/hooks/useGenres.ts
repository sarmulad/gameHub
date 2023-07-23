import React, { useEffect, useState,  }  from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios';

export interface Platform{
    id:number;
    name: string;
    slug:string;
}

export interface Genres{
    id:number;
    name:string
 }
 
 interface FetchProps {
    count: number;
    results:Genres[]
 }

 const useGenres = () =>{
    const [Genres, setGenres] =  useState<Genres[]>([])
    const [error, setError] =  useState("")
    const [isLoading, setIsloading] =  useState(false)

   useEffect(()=>{
    const controller = new AbortController();
      setIsloading(true)
      apiClient.get<FetchProps>('/genres', {signal:controller.signal})
       .then((res) => {
           setGenres(res.data.results)
           setIsloading(false)
         })
       .catch((err)=>{ 
          if(err instanceof CanceledError) return;
          setError(err.message)
          setIsloading(false)
          
        })

       return () => controller.abort()
   },[])

    return{Genres, error, isLoading}
}

export default useGenres;