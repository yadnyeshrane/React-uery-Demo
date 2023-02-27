import axios from 'axios'
import React, { useState } from 'react'
import {useQuery} from'react-query'
import { Link } from 'react-router-dom'
import { useAddSuperHeroData, UsesuperHerodata } from '../Hooks/UsesuperHerodata'


const fetchQuer=()=>{
  return axios.get("http://localhost:4000/superheroes")
}

export default function RQSuperHeros() {
  const [flag,setFlag]=useState(false);
  const[name,setname]=useState("");
  const[alterEgo,setAlterEgo]=useState("");

  const{mutate:addSuperHeroData}=useAddSuperHeroData()
  const onSuccess=(data)=>{
    if(data.data.length>3)
    {
      setFlag(true);
    }
    console.log("Sucesscalled",data);
  }
  const onError=(error)=>{
    console.log('Error called')
    setFlag(true);
  }
  // const{isLoading,data,isError,error,refetch}= useQuery("super-hero",fetchQuer,{
  //   cacheTime:5000,//by default it is 5 min
  //   staleTime:7000,//till the request would be valid the 
  //  // refetchOnMount:true,//by default it is true when the componenets mounts
  // //  refetchOnWindowFocus:'always',//if any data updated in db no need to refresh
  // //  refetchInterval:flag==false?2000:false,//this will make the request after every 2s by defualt it is false
  //  // refetchIntervalInBackground:true,//by default the this is false, so this is used for running the query in background
  // // enabled:false,
  //  onSuccess,
  //  onError,
  //  select:(data)=>{
  //   const superHeroNames=data.data.map((hero)=>hero.name);
  //   return superHeroNames;
  //  }
  // } )
  const{isLoading,data,isError,error,refetch}= UsesuperHerodata(onSuccess,onError,true)
  console.log(isLoading,data)
  if(isLoading)
  {
    return <h2>Loading.....</h2>
  }
  if(isError)
  {
    return<h2>{error.message}</h2>
  }
  const addHero=()=>{
    console.log({name,alterEgo})
    const hero={name,alterEgo};
    addSuperHeroData(hero) 
  }
  return (
   <> <div>RQSuperHeros</div>
   <div>
    <input type="text" value={name} onChange={(e)=>{
      setname(e.target.value)
    }}/>
     <input type="text" value={alterEgo} onChange={(e)=>{
      setAlterEgo(e.target.value)
    }}/>
    <button onClick={addHero}>Add Hero</button>
   </div>
   {
    data?.data.map(hero=>{
return <div>
  <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
  </div>
    })
   }
   {/* {
    data?.map((names)=>{
      return <div>{names}</div>
    })
   } */}
   </>
  )
}
