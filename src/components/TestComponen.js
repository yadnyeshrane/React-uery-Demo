import React from 'react'
import { UsesuperHerodata } from '../Hooks/UsesuperHerodata'

function TestComponen() {
    const onSuccess=(data)=>{
       
        console.log("Sucesscalled",data);
      }
      const onError=(error)=>{
        console.log('Error called')
      
      }
    const{isLoading,data,isError,error,refetch}= UsesuperHerodata(onSuccess,onError,false)
  console.log(isLoading,data)
  if(isLoading)
  {
    return <h2>Loading.....</h2>
  }
  if(isError)
  {
    return<h2>{error.message}</h2>
  }
  return (
    <>
    <div>TestComponen</div>
    <button onClick={refetch}>Refetch on clic</button>
    {
        data?.map((name)=>{
            return(<>
            <h1>{name}</h1>
            </>
            )
        })
    }
    </>
  )
}

export default TestComponen