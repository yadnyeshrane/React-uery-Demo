import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHero=()=>{
return axios.get("http://localhost:4000/superheroes");
}
const fetchFriends=()=>{
    return axios.get("http://localhost:4000/friends");
}
function ParallelQueries() {
  const{data:superherodata}=  useQuery("super-heros",fetchSuperHero);
   const{data:frienddata}= useQuery("friends",fetchFriends);
  return (
    <div>ParallelQueries.pages</div>
  )
}

export default ParallelQueries