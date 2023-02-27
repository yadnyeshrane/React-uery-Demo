import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroDataById } from '../Hooks/useSuperHeroDataById'

function RQSuperHero() {

    const{heroId}=useParams();
    const {isLoading,data,isError,error}=useSuperHeroDataById(heroId)
    console.log(isLoading,data,isError)
    if(isLoading)
    {
        return <h2>Loading....</h2>
    }
    if(isError)
    {
        return<h2>{error.message}</h2>
    }
  return (
    <div>SUper hero details--
<div>
    {
        data?.data.name
    }-
    {
        data?.data.alterEgo
    }
</div>

    </div>
  )
}

export default RQSuperHero