import axios from "axios";
import {useQuery,useMutation,useQueryClient} from'react-query'

const fetchQuer=()=>{
    return axios.get("http://localhost:4000/superheroes")
  }

  const addSuperHero=(hero)=>{
    return axios.post("http://localhost:4000/superheroes",hero)
  }
  
export const UsesuperHerodata=(onSuccess,onError,enabled)=>{
    return  useQuery("super-hero",fetchQuer,{
        cacheTime:5000,//by default it is 5 min
        staleTime:7000,//till the request would be valid the 
       refetchOnMount:enabled,//by default it is true when the componenets mounts
      //  refetchOnWindowFocus:'always',//if any data updated in db no need to refresh
      //  refetchInterval:flag==false?2000:false,//this will make the request after every 2s by defualt it is false
       // refetchIntervalInBackground:true,//by default the this is false, so this is used for running the query in background
      enabled:enabled,//by defualt enabled is true bt we have to set to false becoz enabled true fire the request wehn the components mounts
       onSuccess,
       onError,
    //   Pp
      } )
}


export const useAddSuperHeroData=()=>{
  const queryclinet=useQueryClient();
return useMutation(addSuperHero,{
//   onSuccess:(data)=>{
// //  queryclinet.invalidateQueries("super-hero")--after saving the data make a get reuest
// queryclinet.setQueriesData("super-hero",(oldQueryData)=>{ //this is one used for storing the data and getting the updated list without making a new request 
//   return{
//     ...oldQueryData,
//     dta:[...oldQueryData.data,data.data]
//   }
// })
//   }

//optimistic update
onMutate:async(newHero)=>{
await queryclinet.cancelQueries("super-hero") //stop the backgroudn refecthing so that it wont hamper our performance
const previousHerodata=queryclinet.getQueriesData("super-hero")//used to getthe previos data
queryclinet.setQueriesData("super-hero",(oldQueryData)=>{
  return{
    ...oldQueryData,
    data:[oldQueryData.data,{id:oldQueryData?.data?.length+1,...newHero}]
  }
})
return {previousHerodata}//if something went wrong return the existing data
},
onError:(_error,_hero,context)=>{
queryclinet.setQueryData("super-hero",context.previousHerodata)
},
onSettled:()=>{
  //if the mutataion sucessfull or error we ahve to refetch
  queryclinet.invalidateQueries("super-hero")
}
})
}