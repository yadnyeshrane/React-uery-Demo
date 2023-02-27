import axios from 'axios'
import React from 'react'
import { useQueries, useQuery } from 'react-query'

const fetchingSuperHero=(heroId)=>{
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}
function DynamicParallel({heroId}) {
   const queryResults= useQueries(heroId.map((id)=>{
        return{
            queryKey:["super-hero",id],
            queryFn:()=>fetchingSuperHero(id)
        }
    }))
    console.log("Results",{queryResults});
  return (
    <div>DynamicParallel.page</div>
  )
}

export default DynamicParallel