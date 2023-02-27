import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'


const fetchColors=(page)=>{
    console.log("pagenumber",page)
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`)
}
function PaginantedQuers() {
    const[pagenumber,setpagenumber]=useState(1);
   const{isLoading,isError,error,data,isFetching} =useQuery(["colors",pagenumber],()=>fetchColors(pagenumber),{
    keepPreviousData:true
   })
   
   if(isLoading)
   {
    return<h1>Loading...</h1>
   }
   if(isError)
   {
    return<h2>{error.message}</h2>
   }
  return (
    <div>{data.data.map((color)=>{
        return(
            <div key={color.id}>
                <h2>{color.id}-{color.label}</h2>
            </div>
        )
    })}
    <div>
        <button onClick={()=>setpagenumber(pagenumber=>pagenumber-1)} disabled={pagenumber===1}>Previos</button>
        <button onClick={()=>setpagenumber(pagenumber=>pagenumber+1)} disabled={pagenumber===4}>Next</button>
    </div>
    {isFetching?"Loading...":""}
    </div>
  )
}

export default PaginantedQuers