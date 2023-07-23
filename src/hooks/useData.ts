import  { useEffect, useState,  }  from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios';

 
 interface FetchProps<T> {
    count: number;
    results:T[]
 }

 const useData = <T>(endpoint:string) =>{
    const [data, setdata] =  useState<T[]>([])
    const [error, setError] =  useState("")
    const [isLoading, setIsloading] =  useState(false)


   useEffect(()=>{
    const controller = new AbortController();
      setIsloading(true)
      apiClient.get<FetchProps<T> >(endpoint, {signal:controller.signal})
       .then((res) => {
           setdata(res.data.results)
           setIsloading(false)
         })
       .catch((err)=>{ 
          if(err instanceof CanceledError) return;
          setError(err.message)
          setIsloading(false)
          
        })

       return () => controller.abort()
   },[])

    return {data, error, isLoading}
}

export default useData;